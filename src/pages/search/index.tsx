import * as React from 'react';

import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Head from 'next/head';

import useSWR from 'swr';
import { gql } from 'graphql-request';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/id';

import { SearchInvesment } from '@/components/modules/SearchInvestment';
import { EmptyResult } from '@/components/modules/EmptyResult';
import { ErrorResult } from '@/components/modules/ErrorResult';

import { ProductCard } from '@/components/elements/ProductCard';
import { Pagination } from '@/components/elements/Pagination';

import { graphQLFetcher } from '@/utils/fetcher';
import { GraphQLError, ProductResponse } from '@/common/types';
import { API_DATE_FORMAT, DATE_FORMAT } from '@/common/constants';

dayjs.extend(customParseFormat);

const ITEM_PER_PAGE = 10;

export type SearchPageProps = {
  query: string;
  seed: ProductResponse;
}

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

/**
 * Search result page. Designed to be server side rendered.
 *
 * @param {SearchPageProps} props search page props
 * @return {JSX.Element} search result page
 */
function Search(
  { query, seed }: React.PropsWithoutRef<SearchPageProps>,
): JSX.Element {
  const { count, version } = seed.apps;

  const [page, setPage] = React.useState(1);
  const container = React.useRef(null);

  const { data, error } = useSWR<ProductResponse, GraphQLError>(
    [page],
    (page) => {
      const variables = {
        query,
        limit: ITEM_PER_PAGE,
        offset: (page - 1) * ITEM_PER_PAGE,
      };

      if (variables.offset) {
        variables.offset += 1;
      }

      return graphQLFetcher<ProductResponse>(gqlQuery, variables);
    },
    { fallbackData: page === 1 ? seed : null },
  );

  const handlePageChange = (pageNumber: number) => {
    // scroll to the top of container
    if (process.browser) {
      const elem = container.current as HTMLElement;
      window.scrollTo(0, elem.getBoundingClientRect().top);
    }

    setPage(pageNumber);
  };

  const products = React.useMemo((): JSX.Element | JSX.Element[] => {
    if (error) {
      return <ErrorResult />;
    }

    if (!count) {
      return <EmptyResult />;
    }

    const appList = () => {
      if (!data) {
        return [...Array(10)].map(
          (_, idx: number) => <ProductCard.Skeleton key={`skeleton-${idx}`} />,
        );
      }

      return [];
    };

    return (
      <ul className="flex-1
        my-4
        max-w-xl
        mx-auto">
        FOO BAR
      </ul>
      /*
      <Box
        marginX="auto"
        mt={2}>
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
      */
    );
  }, [data, error, count, page]);

  return (
    <>
      <Head>
        <title>Hasil Pencarian Produk Investasi — Piramida</title>
      </Head>

      <div className="flex flex-col justify-end
        flex-1
        w-full
        max-w-xl
        mx-auto
        min-h-24 max-h-48
        2xl:max-h-56">
        <h1 className="text-5xl
          leading-relaxed
          font-bold">
          Hasil Pencarian
        </h1>

        <SearchInvesment
          absolute={true}
          term={query} />

        {count && <p className="text-sm text-gray-400 mt-2">
          Menampilkan {count} hasil pencarian per {
            dayjs(version, API_DATE_FORMAT).locale('id').format(DATE_FORMAT)
          }
        </p>}
      </div>

      {products}
    </>
  );
}

/**
 * Get server side props for initial data
 *
 * @param {GetServerSidePropsContext} ctx server side props context
 * @return {Promise<GetServerSidePropsResult<SearchPageProps>>} initial data
 */
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

  const result = await graphQLFetcher<ProductResponse>(
    request,
    {
      query: q,
      limit: ITEM_PER_PAGE,
      offset: 0,
    },
  );

  return {
    props: {
      query: q,
      seed: result,
    },
  };
}

export default Search;
