import * as React from 'react';

import Head from 'next/head';

import { Heading, Text, Container, Box, Flex, Button, Input } from '@chakra-ui/react';

import { AutoComplete } from '@/components/elements/AutoComplete';
import { Error } from '@/components/elements/Error';

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

  return result.json();
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
      return <AutoComplete.EmptySuggestion />;
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
        <AutoComplete.Suggestion
          key={index}
          index={index}
          onClick={() => handleSuggestionSelect(name)}>
          <Text maxW="100%" isTruncated={true}>
            {highlightTerm(name, searchTerm)}
          </Text>
        </AutoComplete.Suggestion>,
      );
    });

    return elem;
  };

  const suggest = () => {
    if (!searchTerm) {
      return <></>;
    }

    if (appState.error || illegalState.error) {
      return (
        <Error
          marginTop={4}
          dismissable={true}>
          {appState.error || illegalState.error}
        </Error>
      );
    }

    if (appState.isLoading || illegalState.isLoading) {
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

    return (
      <AutoComplete.SuggestionsContainer
        as="ul"
        maxHeight={64}
        margin={2}>
        {mapInvestmentData()}
      </AutoComplete.SuggestionsContainer>
    );
  };

  const refreshSuggestions = (controller: AbortController) => {
    illegalDispatch({ type: 'FETCH_LOADING' });
    appDispatch({ type: 'FETCH_LOADING' });

    fetchSuggestions(searchTerm, controller)
      .then((result) => {
        if (result['errors']) {
          const { message, path } = result['errors'][0];

          path.forEach((p: string) => {
            if (p === 'illegalInvestments') {
              illegalDispatch({ type: 'FETCH_ERROR', error: message });
            } else {
              appDispatch({ type: 'FETCH_ERROR', error: message });
            }
          });

          console.log(illegalState.error);
        } else {
          const { illegalInvestments, apps } = result['data'];

          illegalDispatch({ type: 'FETCH_SUCCESS', data: illegalInvestments });
          appDispatch({ type: 'FETCH_SUCCESS', data: apps });
        }
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
