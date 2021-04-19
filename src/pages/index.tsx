import * as React from 'react';

import Head from 'next/head';

import { Heading, Text, Container, Box, Flex, Button, Input } from '@chakra-ui/react';

import { AutoComplete, AutoCompleteInput, EmptySuggestion, Suggestion, SuggestionsContainer, SuggestionSkeleton } from '@/components/elements/AutoComplete';

import { illegalInitialState, Illegal, illegalReducer } from '@/reducers/illegals';
import { appInitialState, App, appReducer } from '@/reducers/apps';

import { apiUrl } from '@/constants/api';
import { useDebounce } from '@/hooks/useDebounce';

import { highlightTerm } from '@/utils/highlight';

interface GraphQLSearchResult {
  illegalInvestments: Illegal[];
  apps: App[];
}

async function fetchSuggestions(
  searchTerm: string,
  abortController: AbortController,
): Promise<GraphQLSearchResult> {
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
      signal: abortController.signal,
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

  const handleSuggestionSelect = (name: string) => setSearchTerm(name);

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

    suggestions.forEach(({ name }, index) => {
      elem.push(
        <Suggestion
          key={index}
          index={index}
          onClick={() => handleSuggestionSelect(name)}>
          <Text maxW="100%" isTruncated={true}>
            {highlightTerm(name, searchTerm)}
          </Text>
        </Suggestion>,
      );
    });

    return elem;
  };

  const suggest = () => {
    if (!searchTerm) {
      return <></>;
    }

    if (appState.isLoading || illegalState.isLoading) {
      return (
        <SuggestionsContainer
          as="ul"
          maxHeight={64}
          margin={2}>
          <SuggestionSkeleton />
          <SuggestionSkeleton />
          <SuggestionSkeleton />
        </SuggestionsContainer>
      );
    }

    return (
      <SuggestionsContainer
        as="ul"
        maxHeight={64}
        margin={2}>
        {mapInvestmentData()}
      </SuggestionsContainer>
    );
  };

  const refreshSuggestions = (controller: AbortController) => {
    illegalDispatch({ type: 'FETCH_LOADING' });
    appDispatch({ type: 'FETCH_LOADING' });

    fetchSuggestions(searchTerm, controller)
      .then((result) => {
        const { illegalInvestments, apps } = result;

        illegalDispatch({ type: 'FETCH_SUCCESS', data: illegalInvestments });
        appDispatch({ type: 'FETCH_SUCCESS', data: apps });
      })
      .catch((err) => {
        if (!controller.signal.aborted) {
          throw err;
        }
      });
  };

  const debouncedRefreshSuggestions = useDebounce(refreshSuggestions, 250);

  React.useEffect(() => {
    if (searchTerm) {
      const controller = new AbortController();

      debouncedRefreshSuggestions(controller);

      return () => {
        controller.abort();
      };
    }
  }, [searchTerm]);

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
