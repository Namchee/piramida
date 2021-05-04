import * as React from 'react';

import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Head from 'next/head';

import useSWR from 'swr';

import { gql } from 'graphql-request';

import { Text, Container, Box, VStack, Flex } from '@chakra-ui/react';

import { SearchInvesment } from '@/components/modules/SearchInvestment';

import { graphQLFetcher } from '@/utils/fetcher';
import { App, GraphQLResult } from '@/common/types';
import { ButtonLink } from '@/components/elements/ButtonLink';
import { Pagination } from '@/components/elements/Pagination';
import { EmptyResult } from '@/components/modules/EmptyResult';

type SearchPageProps = {
  apps: GraphQLResult;
  query: string;
}

const getQuery = (offset: number = 0, query: string) => {
  return gql`
    query {
      apps(name: "${query}", limit: 10, offset: ${offset}) {
        data {
          name
          owner
          url
        }
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
    getQuery((page - 1) * 10, query),
    graphQLFetcher,
    { initialData },
  );

  const showSearchResult = React.useCallback(() => {
    const apps = data.apps.data;

    if (!apps.length) {
      return <EmptyResult />;
    }

    apps.sort((a: App, b: App) => {
      const aIndex = a.name.indexOf(query);
      const bIndex = b.name.indexOf(query);

      if (aIndex > bIndex) {
        return 1;
      } else if (aIndex < bIndex) {
        return -1;
      }

      return 0;
    });

    return (
      <VStack
        alignItems="flex-start"
        spacing="18px">
        <Text
          textAlign="left"
          fontSize="xs"
          textColor="gray.400">
          Menampilkan {initialData.apps.count} hasil pencarian dengan kata kunci &quot;{query}&quot;
        </Text>

        <VStack
          w="full"
          spacing="8px">
          {apps.map(({ name, owner, url }, index) => {
            return (
              <ButtonLink
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
              </ButtonLink>
            );
          })}
        </VStack>

        <Flex
          w="100%"
          justifyContent="center">
          <Pagination
            numPages={Math.ceil(Number(data.apps.count) / 10)}
            currentPage={page}
            onPageChange={(val) => setPage(val)} />
        </Flex>
      </VStack>
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

  const requestQuery = gql`query {
    apps(name: "${query.q}", limit: 10) {
      data {
        name
        owner
        url
      }
      count
    }
  }`;

  const result: GraphQLResult = await graphQLFetcher(
    requestQuery,
  );

  return {
    props: {
      apps: result,
      query: query.q as string,
    },
  };
}

export default Search;
