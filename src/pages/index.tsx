import * as React from 'react';

import Head from 'next/head';
import useSWR from 'swr';

import { gql } from 'graphql-request';

import { Heading, Text, Container, Box, Flex, Button, Input } from '@chakra-ui/react';

import { AutoComplete } from '@/components/elements/AutoComplete';
import { Error } from '@/components/elements/Error';
import { Highlight } from '@/components/elements/Highlight';

import { Illegal, App } from '@/common/types';

import { useDebounce } from '@/hooks/useDebounce';
import { graphQLFetcher } from '@/utils/fetcher';

type GraphQLResult = {
  illegalInvestments: Illegal[];
  apps: App[];
};

function Home() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = React.useState('');

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const debouncedSetter = useDebounce(setDebouncedSearchTerm, 250);

  const { data, error } = useSWR<GraphQLResult, any>(
    () => {
      return gql`query {
        illegalInvestments(name: "${debouncedSearchTerm}", limit: 5) {
          name
        }
        apps(name: "${debouncedSearchTerm}", limit: 5) {
          name
        }
      }`;
    },
    graphQLFetcher,
  );

  React.useEffect(() => {
    if (searchTerm.length > 1) {
      debouncedSetter(searchTerm);
    } else if (!searchTerm) {
      debouncedSetter('');
    }
  }, [searchTerm]);

  const handleSuggestionSelect = (name: string) => setSearchTerm(name);

  const suggest = React.useCallback(() => {
    if (!debouncedSearchTerm) {
      return <></>;
    }

    if (!data) {
      return (
        <AutoComplete.SuggestionsContainer
          as="ul"
          maxHeight={64}
          margin={2}>
          <AutoComplete.SuggestionSkeleton />
          <AutoComplete.SuggestionSkeleton />
          <AutoComplete.SuggestionSkeleton />
        </AutoComplete.SuggestionsContainer>
      );
    }

    if (error) {
      return (
        <Error
          marginTop={4}
          dismissable={true}>
          {error}
        </Error>
      );
    }

    return (
      <AutoComplete.SuggestionsContainer
        as="ul"
        maxHeight={64}
        margin={2}>
        {mapInvestmentData()}
      </AutoComplete.SuggestionsContainer>
    );
  }, [debouncedSearchTerm, data, error]);

  const mapInvestmentData = () => {
    const { illegalInvestments, apps } = data;

    if (!illegalInvestments.length && !apps.length) {
      return <AutoComplete.EmptySuggestion />;
    }

    const elem: JSX.Element[] = [];
    const suggestions = [...illegalInvestments, ...apps];

    suggestions.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
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
          <Text maxW="100%" isTruncated={true}>
            <Highlight text={name} term={searchTerm} />
          </Text>
        </AutoComplete.Suggestion>,
      );
    });

    return elem;
  };

  return (
    <>
      <Head>
        <title>Periksa Legalitas Investasi — Piramida</title>
      </Head>

      <Container
        minH="100%"
        paddingY={16}
        maxW="4xl"
        marginX="auto">
        <Box mb={16}>
          <Heading
            textAlign="center"
            fontWeight={700}
            letterSpacing={-1.5}
            lineHeight={1.65}
            size="4xl">
            Profit atau Ponzi?
          </Heading>
          <Text
            fontSize="xl"
            textAlign="center"
            color="gray.500">
            Periksa legalitas produk investasi pilihan Anda
          </Text>
        </Box>

        <Flex
          justifyContent="space-between"
          paddingX={36}>
          <AutoComplete>
            <Box w="full">
              <AutoComplete.Input>
                <Input
                  autoComplete="false"
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
            ml={4}
            px={8}
            size="lg"
            bg="primary.base"
            color="white"
            fontWeight={500}
            letterSpacing={0.5}
            _hover={{
              backgroundColor: 'primary.darken',
            }}>
            Periksa
          </Button>
        </Flex>
      </Container>
    </>
  );
}

export default Home;
