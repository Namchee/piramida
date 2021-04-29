import * as React from 'react';

import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Head from 'next/head';

import { gql } from 'graphql-request';

import { Text, Container, Box, VStack } from '@chakra-ui/react';

import { SearchInvesment } from '@/components/modules/SearchInvestment';

import { graphQLFetcher } from '@/utils/fetcher';
import { App, GraphQLResult, Illegal } from '@/common/types';
import { ButtonLink } from '@/components/elements/ButtonLink';
import { EmptyResult } from '@/components/modules/EmptyResult';
import { Badge } from '@/components/elements/Badge';

type SearchPageProps = {
  illegalInvestments: Illegal[];
  apps: App[];
  query: string;
}

function Search({ illegalInvestments, apps, query }: React.PropsWithoutRef<SearchPageProps>) {
  const showSearchResult = React.useCallback(() => {
    if (!apps.length && !illegalInvestments.length) {
      return <EmptyResult />;
    }

    const investments = [...apps, ...illegalInvestments];

    investments.sort((a, b) => {
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
          Menampilkan {illegalInvestments.length + apps.length} hasil
          untuk pencari dengan kata kunci &quot;{query}&quot;
        </Text>

        <VStack
          marginTop={4}
          w="full"
          spacing="8px">
          {investments.map(({ id, name }, index) => {
            const isLegal = apps.find((app) => app.name === name);

            return (
              <ButtonLink
                key={index}
                to={`/${isLegal ? 'apps' : 'illegals'}/${id}`}>
                <Badge
                  rounded
                  background={isLegal ? 'green.100' : 'red.100'}>
                  <Text
                    letterSpacing="wide"
                    fontWeight={600}
                    fontSize="xs"
                    color={isLegal ? 'green.500' : 'red.500'}
                    textTransform="uppercase">
                    {isLegal ? 'Legal' : 'Ilegal'}
                  </Text>
                </Badge>

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
  }, [illegalInvestments, apps, query]);

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
    illegalInvestments(name: "${query.q}") {
      data {
        id,
        name
      }
      count
    }
    apps(name: "${query.q}") {
      data {
        id,
        name
      }
      count
    }
  }`;

  const { illegalInvestments, apps }: GraphQLResult = await graphQLFetcher(
    requestQuery,
  );

  return {
    props: {
      illegalInvestments: illegalInvestments.data,
      apps: apps.data,
      query: query.q as string,
    },
  };
}

export default Search;
