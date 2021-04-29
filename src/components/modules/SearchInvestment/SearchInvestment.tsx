import * as React from 'react';

import { useRouter } from 'next/router';

import useSWR from 'swr';

import { gql } from 'graphql-request';

import { Text, Box, Flex, Button, Input } from '@chakra-ui/react';

import { Dialog } from '@/components/elements/Dialog';
import { AutoComplete } from '@/components/elements/AutoComplete';
import { Highlight } from '@/components/elements/Highlight';
import { ErrorIcon } from '@/components/elements/Icon';

import { GraphQLResult } from '@/common/types';

import { useDebounce } from '@/hooks/useDebounce';
import { graphQLFetcher } from '@/utils/fetcher';

export type SearchInvestmentProps = {
  term?: string;
  absolute?: boolean;
};

function SearchInvestment(
  { term, absolute }: React.PropsWithoutRef<SearchInvestmentProps>,
) {
  const [searchTerm, setSearchTerm] = React.useState(term ?? '');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = React.useState('');

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const debouncedSetter = useDebounce(setDebouncedSearchTerm, 250);

  const { data, error } = useSWR<GraphQLResult, any>(
    () => {
      return gql`query {
        illegalInvestments(name: "${debouncedSearchTerm}", limit: 3) {
          data {
            name
          }
        }
        apps(name: "${debouncedSearchTerm}", limit: 3) {
          data {
            name
          }
        }
      }`;
    },
    graphQLFetcher,
  );

  React.useEffect(() => {
    if (searchTerm.length) {
      debouncedSetter(searchTerm);
    } else {
      debouncedSetter('');
    }
  }, [searchTerm]);

  const handleSuggestionSelect = (name: string) => {
    setSearchTerm(name);
    search();
  };

  const suggest = React.useCallback(() => {
    if (!debouncedSearchTerm) {
      return <></>;
    }

    if (error) {
      return (
        <Dialog
          theme="red"
          marginTop={4}
          dismissable={true}>
          <Flex
            alignItems="center">
            <ErrorIcon
              w={6}
              h={6}
              stroke="none"
              fill="red.700" />
            <Text
              ml={3}
              color="red.700">
              {error.response.errors[0].message}
            </Text>
          </Flex>
        </Dialog>
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
  }, [debouncedSearchTerm, data, error]);

  const mapInvestmentData = () => {
    const [illegalInvestments, apps] = [data.illegalInvestments.data, data.apps.data];

    if (!illegalInvestments.length && !apps.length) {
      return <AutoComplete.EmptySuggestion />;
    }

    const elem: JSX.Element[] = [];
    const suggestions = [...illegalInvestments, ...apps];

    suggestions.sort((a, b) => {
      const aIndex = a.name.indexOf(debouncedSearchTerm);
      const bIndex = b.name.indexOf(debouncedSearchTerm);

      if (aIndex < bIndex) {
        return -1;
      } else if (aIndex > bIndex) {
        return 1;
      }

      return 0;
    });

    suggestions.forEach(({ name }, index) => {
      elem.push(
        <AutoComplete.Suggestion
          key={index}
          index={index}
          onClick={() => handleSuggestionSelect(name)}>
          <Text maxW="sm" isTruncated={true}>
            <Highlight text={name} term={searchTerm} />
          </Text>
        </AutoComplete.Suggestion>,
      );
    });

    return elem;
  };

  const router = useRouter();
  const search = () => {
    router.push(
      {
        pathname: '/search',
        query: {
          q: searchTerm,
        },
      },
    );
  };

  return (
    <Flex
      position="relative"
      justifyContent="space-between">
      <AutoComplete>
        <Box position="relative">
          <AutoComplete.Input>
            <Input
              autoComplete="off"
              value={searchTerm}
              onInput={handleInput}
              focusBorderColor="primary.lighten"
              placeholder="Cari investasi atau perusahaan"
              size="lg"
              type="text" />
          </AutoComplete.Input>
          {suggest()}
        </Box>
      </AutoComplete>

      <Button
        onClick={search}
        ml={4}
        px={8}
        size="lg"
        bg="primary.base"
        color="white"
        fontWeight={500}
        letterSpacing={0.5}
        _hover={{
          backgroundColor: 'primary.darken',
        }}
        _active={{
          backgroundColor: 'primary.darken',
        }}>
        Periksa
      </Button>
    </Flex>
  );
}

export default SearchInvestment;
