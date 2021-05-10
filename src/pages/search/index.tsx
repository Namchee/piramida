import * as React from 'react';

import Head from 'next/head';

import useSWR from 'swr';

import { gql } from 'graphql-request';

import { Text, Container, Box, VStack, Flex } from '@chakra-ui/react';

import { SearchInvesment } from '@/components/modules/SearchInvestment';

import { graphQLFetcher } from '@/utils/fetcher';
import { GraphQLResult } from '@/common/types';

import { SearchResult } from '@/components/elements/SearchResult';
import { Pagination } from '@/components/elements/Pagination';
import { EmptyResult } from '@/components/modules/EmptyResult';
import { useRouter } from 'next/router';

const getQuery = (offset: number = 0, query: string): string => {
  if (offset) {
    offset += 1;
  }

  return gql`
    query Apps($query: String!) {
      apps(name: $query, limit: 10, offset: ${offset}) {
        data {
          name
          owner
          url
        }
        count
      }
    }
  `;
};

const formatUrl = (url: string) => {
  if (!url.startsWith('http')) {
    url = `https://${url}`;
  }

  return url;
};

function Search() {
  const { query, push } = useRouter();

  /*
  if (!query || !query.q || Array.isArray(query.q)) {
    if (process.browser) {
      push('/');
    }
  }
  */

  const term = query.q as string;

  console.log(term);

  const [page, setPage] = React.useState(1);

  const { data, error } = useSWR<GraphQLResult, any>(
    [getQuery((page - 1) * 10, term), term],
    (query, term) => graphQLFetcher(query, { query: term }),
  );

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const showSearchResult = React.useCallback(() => {
    return (
      <VStack
        mt={4}
        spacing={2}>
        {[...Array(5)].map((_, idx: number) => <SearchResult.Skeleton key={`skeleton-${idx}`} />)}
      </VStack>
    );

    if (!data) {

    } else {
      return (<Text>Stuff</Text>);
    }

    if (error) {

    }

    const { data: apps, count } = data.apps;

    if (!apps.length) {
      return <EmptyResult />;
    }

    return (
      <Flex flexDirection="column" alignItems="flex-start">
        <Text
          textAlign="left"
          fontSize="xs"
          textColor="gray.400">
          Menampilkan {count} hasil pencarian dengan kata kunci &quot;{query}&quot;
        </Text>

        <VStack
          mt={4}
          w="full"
          spacing="8px">
          {apps.map(({ name, owner, url }, index) => {
            return (
              <SearchResult
                key={index}
                to={formatUrl(url)}>
                <Text
                  maxW="sm"
                  fontWeight={500}>
                  {name}
                </Text>
                <Text
                  fontSize="sm"
                  color="gray.400">
                  {owner}
                </Text>
              </SearchResult>
            );
          })}
        </VStack>
      </Flex>
    );
  }, [data, error]);

  return (
    <>
      <Head>
        <title>Pencarian Investasi - Piramida</title>
      </Head>

      <Container
        paddingY={16}
        maxW="xl"
        marginX="auto">
        <SearchInvesment
          absolute={true}
          term={term} />

        <Box
          marginX="auto"
          mt={2}>
          {showSearchResult()}
          {
            data &&
            <Flex
              mt={12}
              w="100%"
              justifyContent="center">
              <Pagination
                numPages={Math.ceil(Number(data.apps.count) / 10)}
                currentPage={page}
                onPageChange={handlePageChange} />
            </Flex>}
        </Box>
      </Container>
    </>
  );
}

export default Search;
