import * as React from 'react';

import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Head from 'next/head';

import useSWR from 'swr';
import { gql } from 'graphql-request';

import { Text, Container, Box, VStack, Flex } from '@chakra-ui/react';

import { SearchInvesment } from '@/components/modules/SearchInvestment';
import { EmptyResult } from '@/components/modules/EmptyResult';
import { ErrorResult } from '@/components/modules/ErrorResult';

import { SearchResult } from '@/components/elements/SearchResult';
import { Pagination } from '@/components/elements/Pagination';

import { graphQLFetcher } from '@/utils/fetcher';
import { GraphQLResult } from '@/common/types';


const ITEM_PER_PAGE = 10;

export type SearchPageProps = {
  query: string;
  initialData: GraphQLResult;
  count: number;
  version: string;
}

type GraphQLVariables = {
  query: string;
  limit?: number;
  offset?: number;
};

const gqlQuery = gql`
  query Apps($query: String!, $limit: Int, $offset: Int) {
    apps(name: $query, limit: $limit, offset: $offset) {
      data {
        name
        owner
        url
      }
    }
  }
`;

const formatUrl = (url: string) => {
  if (!url.startsWith('http')) {
    url = `https://${url}`;
  }

  return url;
};

function Search(
  { query, initialData, count, version }: React.PropsWithoutRef<SearchPageProps>,
) {
  const [page, setPage] = React.useState(1);
  const container = React.useRef(null);

  const { data, error } = useSWR<GraphQLResult, any>(
    [gqlQuery, page],
    (gqlQuery, page) => {
      const variables = {
        query,
        limit: ITEM_PER_PAGE,
        offset: (page - 1) * ITEM_PER_PAGE,
      };

      if (variables.offset) {
        variables.offset += 1;
      }

      return graphQLFetcher<GraphQLVariables>(gqlQuery, variables);
    },
    { initialData: page === 1 ? initialData : null },
  );

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);

    // scroll to the top of container
    (container.current as HTMLElement).scrollIntoView();
  };

  const versionDate = React.useMemo(() => {
    return new Date(version);
  }, [version]);

  const options: any = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const searchResult = React.useCallback(() => {
    if (error) {
      return <ErrorResult />;
    }

    if (!count) {
      return <EmptyResult />;
    }

    const appList = () => {
      if (!data) {
        return [...Array(10)].map(
          (_, idx: number) => <SearchResult.Skeleton key={`skeleton-${idx}`} />,
        );
      }

      return data.apps.data.map(({ name, owner, url }, index) => {
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
      });
    };

    return (
      <Box
        marginX="auto"
        mt={2}>
        <Text
          textAlign="left"
          fontSize="sm"
          textColor="gray.500">
          Menampilkan {count} hasil pencarian per {versionDate.toLocaleDateString('id-ID', options)}.
        </Text>

        <VStack
          my={4}
          spacing={2}
          w="full">
          {appList()}
        </VStack>

        <Flex mt={8} w="full" justifyContent="center">
          <Pagination
            currentPage={page}
            numPages={Math.ceil(count / ITEM_PER_PAGE)}
            onPageChange={handlePageChange} />
        </Flex>
      </Box>
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
        marginX="auto"
        ref={container}>
        <SearchInvesment
          absolute={true}
          term={query} />

        {searchResult()}
      </Container>
    </>
  );
}

export async function getServerSideProps(
  { query }: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<SearchPageProps>> {
  if (!query || !query.q || Array.isArray(query.q)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const { q } = query;

  const request = gql`
    query Apps($query: String!, $limit: Int, $offset: Int) {
      apps(name: $query, limit: $limit, offset: $offset) {
        data {
          name
          owner
          url
        }
        count
        version
      }
    }
  `;

  const result: GraphQLResult = await graphQLFetcher<GraphQLVariables>(
    request,
    {
      query: q,
      limit: ITEM_PER_PAGE,
    },
  );

  return {
    props: {
      query: q,
      initialData: result,
      count: result.apps.count,
      version: result.apps.version,
    },
  };
}

export default Search;
