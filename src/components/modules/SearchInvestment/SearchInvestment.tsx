import * as React from 'react';

import { useRouter } from 'next/router';

import useSWR from 'swr';

import { gql } from 'graphql-request';

import { Alert } from '@/components/elements/Alert';
import { Skeleton } from '@/components/elements/Skeleton';
import { AutoComplete } from '@/components/elements/AutoComplete';
import { Highlight } from '@/components/elements/Highlight';
import { ErrorIcon } from '@/components/elements/Icon';
import Empty from './Empty';

import { useDebounce } from '@/hooks/useDebounce';
import { graphQLFetcher } from '@/utils/fetcher';
import { AppData, AppResponse, GraphQLError } from '@/common/types';

export type SearchInvestmentProps = {
  term?: string;
  absolute?: boolean;
};

const getQuery = gql`
  query Apps($query: String!) {
    apps(name: $query, limit: 10) {
      data {
        name
      }
    }
  }
`;

/**
 * Search bar for searching legal investments
 *
 * @param {SearchInvestmentProps} props search investment props
 * @return {JSX.Element} Dedicated search bar component for searching
 * legal investments.
 */
function SearchInvestment({
  term,
}: React.PropsWithoutRef<SearchInvestmentProps>): JSX.Element {
  const [searchTerm, setSearchTerm] = React.useState(term ?? '');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = React.useState('');

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const debouncedSetter = useDebounce(setDebouncedSearchTerm, 250);

  const { data, error } = useSWR<AppResponse, GraphQLError>(
    [getQuery, debouncedSearchTerm],
    (query, term) => graphQLFetcher(query, { query: term })
  );

  React.useEffect(() => {
    if (searchTerm.length) {
      debouncedSetter(searchTerm);
    } else {
      debouncedSetter('');
    }
  }, [searchTerm, debouncedSetter]);

  const router = useRouter();

  const navigateToSearchPage = (term: string) => {
    if (term) {
      router.push({
        pathname: '/search',
        query: {
          q: escape(term),
        },
      });
    }
  };

  const search = () => {
    navigateToSearchPage(searchTerm);
  };

  const suggestions = React.useMemo((): JSX.Element => {
    if (!debouncedSearchTerm) {
      return <></>;
    }

    if (error) {
      return (
        <Alert theme="red" marginTop={4} dismissable={true}>
          <div className="flex items-center">
            <ErrorIcon className="w-6 h-6 text-red-700" />
            <p className="ml-3 text-red-700">
              {error.response.errors[0].message}
            </p>
          </div>
        </Alert>
      );
    }

    const createContainer = (child) => {
      return (
        <AutoComplete.SuggestionsContainer
          className="absolute
          mt-2
          w-full
          max-w-xl
          bg-white
          overflow-y-auto
          shadow-md
          rounded-md
          z-1
          h-48
          max-h-48
          scrollbar-thin
          scrollbar-thumb-gray-300
          scrollbar-track-gray-100
          scrollbar-thumb-rounded-full
          scrollbar-track-rounded-full"
        >
          {child}
        </AutoComplete.SuggestionsContainer>
      );
    };

    if (!data) {
      return createContainer(
        [...Array(4)].map((_, idx) => {
          return (
            <li className="p-4" key={idx}>
              <Skeleton className="h-3 rounded-sm" />
            </li>
          );
        })
      );
    }

    const navigateToSearchPage = (term: string) => {
      if (term) {
        router.push({
          pathname: '/search',
          query: {
            q: escape(term),
          },
        });
      }
    };

    const handleSuggestionSelect = (name: string) => {
      setSearchTerm(name);
      navigateToSearchPage(name);
    };

    const apps = data.apps.data;

    if (!apps.length) {
      return createContainer(<Empty />);
    }

    const elem: JSX.Element[] = [];

    apps.sort((a: AppData, b: AppData) => {
      const aIndex = a.name.indexOf(debouncedSearchTerm);
      const bIndex = b.name.indexOf(debouncedSearchTerm);

      if (aIndex < bIndex) {
        return -1;
      } else if (aIndex > bIndex) {
        return 1;
      }

      return 0;
    });

    apps.forEach((app, index) => {
      elem.push(
        <AutoComplete.Suggestion
          key={index}
          index={index}
          onClick={() => handleSuggestionSelect(app.name)}
        >
          <p className="max-w-prose truncate">
            <Highlight
              text={app.name}
              term={debouncedSearchTerm}
              highlightStyle="bg-yellow-200"
            />
          </p>
        </AutoComplete.Suggestion>
      );
    });

    return createContainer(elem);
  }, [data, error, debouncedSearchTerm, router]);

  return (
    <div className="flex justify-between space-x-4">
      <AutoComplete className="relative w-full">
        <AutoComplete.Input>
          <input
            type="text"
            autoComplete="off"
            value={searchTerm}
            onInput={handleInput}
            placeholder="Cari investasi atau perusahaan"
            className="w-full
              py-4 px-5
              text-xl
              shadow-sm
              border-gray-200 border
              transition-colors
              focus:ring focus:ring-primary-light focus:ring-opacity-25
              rounded-md"
          />
        </AutoComplete.Input>
        {suggestions}
      </AutoComplete>
      <div>
        <button
          className="py-4 px-6
            text-xl
          bg-primary
          text-white
            rounded-md
            transition-colors
            focus:outline-none
            focus:ring focus:ring-primary-light focus:ring-opacity-50
            hover:bg-primary-dark focus:bg-primary-dark"
          onClick={search}
        >
          Periksa
        </button>
      </div>
    </div>
  );
}

export default SearchInvestment;
