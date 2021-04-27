import * as React from 'react';

import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Head from 'next/head';

import { gql } from 'graphql-request';

import { Heading, Text, Container, Box, Flex } from '@chakra-ui/react';

import { SearchInvesment } from '@/components/modules/SearchInvestment';
import { Exclamation } from '@/components/elements/Icon';

import { graphQLFetcher } from '@/utils/fetcher';
import { App, GraphQLResult, Illegal } from '@/common/types';

const WarningIcon = () => <Exclamation w={6} h={6} stroke="red.500" fill="none" />;

type SearchPageProps = {
  illegalInvestments: Illegal[];
  apps: App[];
  query: string;
}

function Search({ illegalInvestments, apps, query }: React.PropsWithoutRef<SearchPageProps>) {
  const showSearchResult = React.useCallback(() => {
    if (!apps.length && !illegalInvestments.length) {
      return (
        <Flex>
          <Heading>
            Tidak ada hasil yang sesuai
          </Heading>
        </Flex>
      );
    }

    return (
      <>
        <Text
          fontSize="sm"
          textColor="gray.400">
          Menampilkan {illegalInvestments.length + apps.length} hasil
          untuk pencari dengan kata kunci &quot;{query}&quot;
        </Text>
      </>
    );
  }, [illegalInvestments, apps, query]);

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
        <SearchInvesment
          absolute={true}
          term={query} />

        <Box
          maxW="xl"
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
): Promise<GetServerSidePropsResult<SearchPageProps> > {
  if (!query || !query.q) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const requestQuery = gql`query {
    illegalInvestments(name: "${query.q}", limit: 5) {
      id,
      name
    }
    apps(name: "${query.q}", limit: 5) {
      id,
      name
    }
  }`;

  const { illegalInvestments, apps }: GraphQLResult = await graphQLFetcher(
    requestQuery,
  );

  if (illegalInvestments.length === 1 && !apps) {
    return {
      redirect: {
        destination: '/illegals',
        permanent: false,
      },
    };
  }

  if (apps.length === 1 && !illegalInvestments) {
    return {
      redirect: {
        destination: '/apps',
        permanent: false,
      },
    };
  }

  return {
    props: {
      illegalInvestments,
      apps,
      query: query.q as string,
    },
  };
}

export default Search;
