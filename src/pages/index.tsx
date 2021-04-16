import * as React from 'react';

import Head from 'next/head';

import { Heading, Text, Container, Box, Flex, Button, Input } from '@chakra-ui/react';

import { AutoComplete, EmptySuggestion, Suggestion, SuggestionsContainer, SuggestionSkeleton } from '@/components/elements/AutoComplete';

import { illegalInitialState, Illegal, illegalReducer } from '@/reducers/illegals';
import { appInitialState, App, appReducer } from '@/reducers/apps';

import { apiUrl } from '@/constants/api';
import { useDebounce } from '@/hooks/useDebounce';
import AutoCompleteInput from '@/components/elements/AutoComplete/AutoCompleteInput';

interface GraphQLSearchResult {
  illegalInvestments: Illegal[];
  apps: App[];
}

async function fetchSuggestions(searchTerm: string): Promise<GraphQLSearchResult> {
  const body = {
    query: `query {
      illegalInvestments(name: "${searchTerm}", limit: 5) {
        name
      }

      apps(name: "${searchTerm}", limit: 5) {
        name
      }
    }`,
  };

  const result = await fetch(
    apiUrl,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body),
    },
  );

  const json = await result.json();

  return json['data'];
}

function Home() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const [illegalState, illegalDispatch] = React.useReducer(illegalReducer, illegalInitialState);
  const [appState, appDispatch] = React.useReducer(appReducer, appInitialState);

  const debouncedSearchTerm = useDebounce(searchTerm, 250);

  const handleSuggestionSelect = (name: string) => {
    setSearchTerm(name);
  };

  const buildSuggestions = () => {
    if (debouncedSearchTerm) {
      if (illegalState.isLoading || appState.isLoading) {
        return (
          <SuggestionsContainer as="ul" margin={2}>
            <SuggestionSkeleton />
            <SuggestionSkeleton />
            <SuggestionSkeleton />
          </SuggestionsContainer>
        );
      } else {
        return (
          <SuggestionsContainer as="ul" margin={2}>
            {mapInvestmentData()}
          </SuggestionsContainer>
        );
      }
    }

    return <></>;
  };

  const mapInvestmentData = () => {
    if (!illegalState.data.length && !appState.data.length) {
      return <EmptySuggestion />;
    }

    const elem: JSX.Element[] = [];
    const suggestions = [...illegalState.data, ...appState.data];

    suggestions.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      }

      return 0;
    });

    suggestions.forEach(({ name }) => {
      elem.push(
        <Suggestion
          as="li"
          onClick={handleSuggestionSelect}
          onSelected={handleSuggestionSelect}
          term={debouncedSearchTerm}
          key={name}
          text={name}
        />,
      );
    });

    return elem;
  };

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      illegalDispatch({ type: 'FETCH_LOADING' });
      appDispatch({ type: 'FETCH_LOADING' });

      fetchSuggestions(debouncedSearchTerm)
        .then((result) => {
          const { illegalInvestments, apps } = result;

          illegalDispatch({ type: 'FETCH_SUCCESS', data: illegalInvestments });
          appDispatch({ type: 'FETCH_SUCCESS', data: apps });
        });
    }
  }, [debouncedSearchTerm]);

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
            <Box flex={1}>
              <AutoCompleteInput>
                <Input
                  autoComplete="false"
                  value={searchTerm}
                  onInput={handleInput}
                  focusBorderColor="primary.lighten"
                  placeholder="Cari investasi atau perusahaan"
                  size="lg"
                  type="text" />
              </AutoCompleteInput>
              {buildSuggestions()}
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
