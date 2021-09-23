import * as React from 'react';

import { useRouter } from 'next/router';

import useSWR from 'swr';

import { gql } from 'graphql-request';

import { Alert } from '@/components/elements/Alert';
import { AutoComplete } from '@/components/elements/AutoComplete';
import { Highlight } from '@/components/elements/Highlight';
import { ErrorIcon } from '@/components/elements/Icon';

// import { App, GraphQLError, GraphQLResult } from '@/common/types';

import { useDebounce } from '@/hooks/useDebounce';
import { graphQLFetcher } from '@/utils/fetcher';
import { AppData, AppResponse, GraphQLError } from '@/common/types';

export type SearchInvestmentProps = {
  term?: string;
  absolute?: boolean;
};

const getQuery = gql`
query Apps($query: String!) {
  apps(name: $query, limit: 5) {
    data {
      name
    }
  }
}`;

/**
 * Search bar for searching legal investments
 *
 * @param {SearchInvestmentProps} props search investment props
 * @return {JSX.Element} Dedicated search bar component for searching
 * legal investments.
 */
function SearchInvestment(
  { term, absolute }: React.PropsWithoutRef<SearchInvestmentProps>,
): JSX.Element {
  const [searchTerm, setSearchTerm] = React.useState(term ?? '');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = React.useState('');

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const debouncedSetter = useDebounce(setDebouncedSearchTerm, 250);

  const { data, error } = useSWR<AppResponse, GraphQLError >(
    [getQuery, debouncedSearchTerm],
    graphQLFetcher,
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
      router.push(
        {
          pathname: '/search',
          query: {
            q: escape(term),
          },
        },
      );
    }
  };

  const handleSuggestionSelect = (name: string) => {
    setSearchTerm(name);
    navigateToSearchPage(name);
  };

  const search = () => {
    navigateToSearchPage(searchTerm);
  };

  const getSuggestions = () => {
    if (!debouncedSearchTerm) {
      return <></>;
    }

    if (error) {
      return (
        <Alert
          theme="red"
          marginTop={4}
          dismissable={true}>
          <div className="flex items-center">
            <ErrorIcon
              w={6}
              h={6}
              stroke="none"
              fill="red.700" />
            <p className="ml-3 text-red-700">
              {error.response.errors[0].message}
            </p>
          </div>
        </Alert>
      );
    }

    if (!data) {
      return (
        <AutoComplete.SuggestionsContainer
          absolute={absolute}
          as="ul"
          margin={2}>
          <AutoComplete.SuggestionSkeleton />
          <AutoComplete.SuggestionSkeleton />
          <AutoComplete.SuggestionSkeleton />
        </AutoComplete.SuggestionsContainer>
      );
    }

    return (
      <AutoComplete.SuggestionsContainer
        absolute={absolute}
        as="ul"
        margin={2}>
        {mapInvestmentData()}
      </AutoComplete.SuggestionsContainer>
    );
  };

  const mapInvestmentData = () => {
    const apps = data.apps.data;

    if (!apps.length) {
      return <AutoComplete.EmptySuggestion />;
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
          onClick={() => handleSuggestionSelect(app.name)}>
          <p className="max-w-sm truncate">
            <Highlight text={app.name} term={searchTerm} />
          </p>
        </AutoComplete.Suggestion>,
      );
    });

    return elem;
  };

  return (
    <div className="flex justify-between
      relative">
      <AutoComplete>
        <div className="relative">
          <AutoComplete.Input>
            <input
              type="text"
              autoComplete="off"
              value={searchTerm}
              onInput={handleInput}
              placeholder="Cari investasi atau perusahaan"
              className="w-full
                py-4 px-6
                text-xl
                shadow-sm
                border-gray-200 border
                transition-colors
                focus:ring focus:ring-primary-light focus:ring-opacity-25
                rounded-l-md"
            />
          </AutoComplete.Input>
          {getSuggestions()}
        </div>
      </AutoComplete>

      <button
        className="py-4 px-6
        text-xl
        bg-primary text-white rounded-r-md
        transition-colors
        z-1
        focus:outline-none
        focus:ring focus:ring-primary-light focus:ring-opacity-50
        hover:bg-primary-dark focus:bg-primary-dark"
        onClick={search}>
        Periksa
      </button>
    </div>
  );
}

export default SearchInvestment;
