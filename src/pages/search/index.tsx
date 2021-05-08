import * as React from 'react';

import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
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

type SearchPageProps = {
  apps: GraphQLResult;
  query: string;
}

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

function Search({ apps: initialData, query }: React.PropsWithoutRef<SearchPageProps>) {
  const [page, setPage] = React.useState(1);

  const { data, error } = useSWR<GraphQLResult, any>(
    [getQuery((page - 1) * 10, query), query],
    (query, term) => graphQLFetcher(query, { query: term }),
    { initialData },
  );

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const showSearchResult = React.useCallback(() => {
    if (!data) {
      return (
        [...Array(10)].map((_, index: number) => <SearchResult.Skeleton key={`result-${index}`} />)
      );
    }

    const apps = data.apps.data;

    if (!apps.length) {
      return <EmptyResult />;
    }

    return (
      <Flex flexDirection="column" alignItems="flex-start">
        <Text
          textAlign="left"
          fontSize="xs"
          textColor="gray.400">
          Menampilkan {initialData.apps.count} hasil pencarian dengan kata kunci &quot;{query}&quot;
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
        <title>Periksa Legalitas Investasi — Piramida</title>
      </Head>

      <Container
        paddingY={16}
        maxW="xl"
        marginX="auto">
        <SearchInvesment
          absolute={true}
          term={query} />

        <Box
          marginX="auto"
          mt={2}>
          {showSearchResult()}
          {
            initialData.apps.count &&
            <Flex
              mt={12}
              w="100%"
              justifyContent="center">
              <Pagination
                numPages={Math.ceil(Number(initialData.apps.count) / 10)}
                currentPage={page}
                onPageChange={handlePageChange} />
            </Flex>}
        </Box>
      </Container>
    </>
  );
}

export async function getServerSideProps(
  { query }: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<SearchPageProps>> {
  if (!query || !query.q) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const requestQuery = gql`
    query Apps($query: String!) {
      apps(name: $query, limit: 10) {
        data {
          name
          owner
          url
        }
        count
      }
    }
  `;

  const variables = {
    query: decodeURI(query.q as string),
  };

  const result: GraphQLResult = await graphQLFetcher(
    requestQuery,
    variables,
  );

  return {
    props: {
      apps: result,
      query: decodeURI(query.q as string),
    },
  };
}

export default Search;
