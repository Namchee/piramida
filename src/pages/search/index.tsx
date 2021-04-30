import * as React from 'react';

import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Head from 'next/head';

import { gql } from 'graphql-request';

import { Text, Container, Box, VStack } from '@chakra-ui/react';

import { SearchInvesment } from '@/components/modules/SearchInvestment';

import { graphQLFetcher } from '@/utils/fetcher';
import { App, GraphQLResult } from '@/common/types';
import { ButtonLink } from '@/components/elements/ButtonLink';
import { EmptyResult } from '@/components/modules/EmptyResult';

type SearchPageProps = {
  apps: App[];
  query: string;
}

function Search({ apps, query }: React.PropsWithoutRef<SearchPageProps>) {
  const showSearchResult = React.useCallback(() => {
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
      <>
        <Text
          fontSize="sm"
          textColor="gray.400">
          Menampilkan {apps.length} hasil
          untuk pencari dengan kata kunci &quot;{query}&quot;
        </Text>

        <VStack
          marginTop={4}
          w="full"
          spacing="8px">
          {apps.map(({ id, name }, index) => {
            return (
              <ButtonLink
                key={index}
                to={`/apps/${id}`}>
                <Text
                  ml={3}>
                  {name}
                </Text>
              </ButtonLink>
            );
          })}
        </VStack>
      </>
    );
  }, [apps, query]);

  return (
    <>
      <Head>
        <title>Periksa Legalitas Investasi — Piramida</title>
      </Head>

      <Container
        minH="100%"
        paddingY={16}
        maxW="xl"
        marginX="auto">
        <SearchInvesment
          absolute={true}
          term={query} />

        <Box
          marginX="auto"
          mt={4}>
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
    apps(name: "${query.q}") {
      data {
        id,
        name
      }
      count
    }
  }`;

  const { apps }: GraphQLResult = await graphQLFetcher(
    requestQuery,
  );

  return {
    props: {
      apps: apps.data,
      query: query.q as string,
    },
  };
}

export default Search;
