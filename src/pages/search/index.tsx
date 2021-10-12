import * as React from 'react';

import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Head from 'next/head';

import useSWR from 'swr';
import { gql } from 'graphql-request';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/id';

import { SearchInvesment } from '@/components/elements/SearchInvestment';

import { ProductCard } from '@/components/elements/ProductCard';
import { Pagination } from '@/components/elements/Pagination';

import { graphQLFetcher } from '@/utils/fetcher';
import { GraphQLError, ProductResponse } from '@/common/types';
import { API_DATE_FORMAT, DATE_FORMAT } from '@/common/constants';
import { EmptyBanner } from '@/components/elements/Image';

dayjs.extend(customParseFormat);

// Change this to have moar pages
const ITEM_PER_PAGE = 10;

export type SearchPageProps = {
  query: string;
  seed: ProductResponse;
}

// GraphQL query
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
 * Component to be shown when the search result is empty.
 *
 * @return {JSX.Element} empty result component
 */
function EmptyResult(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center
      text-center
      mx-auto
      mb-12
      px-6
      max-w-xl">
      <EmptyBanner className="w-48 md:w-56 h-auto" />

      <h1 className="text-gray-700
        text-xl
        md:text-2xl
        leading-relaxed">
        Produk Investasi Tidak Ditemukan
      </h1>

      <p className="
        text-gray-500
        <md:text-sm
        mt-4
        max-w-md">
        Entitas investasi yang Anda cari tidak dapat ditemukan
        dalam basis data Otoritas Jasa Keuangan Republik Indonesia.
      </p>

      <p className="text-gray-500
        mt-2
        <md:text-sm
        max-w-md">
        Anda disarankan untuk tidak melakukan transaksi apapun
        dengan entitas investasi ini.
      </p>
    </div>
  );
}

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
    [page, query],
    (page, userQuery) => {
      const variables = {
        query: userQuery,
        limit: ITEM_PER_PAGE,
        offset: (page - 1) * ITEM_PER_PAGE,
      };

      return graphQLFetcher<ProductResponse>(gqlQuery, variables);
    },
    { fallbackData: page === 1 ? seed : null },
  );

  const products = React.useMemo((): JSX.Element | JSX.Element[] => {
    if (error) {
      throw new Error('GraphQL API error');
    }

    if (!count) {
      return <EmptyResult />;
    }

    const handlePageChange = (pageNumber: number) => {
      // scroll to the top of container
      if (process.browser && pageNumber !== page) {
        const elem = container.current as HTMLElement;
        window.scrollTo(0, elem.getBoundingClientRect().top);
      }

      setPage(pageNumber);
    };

    const appList = () => {
      if (!data) {
        return [...Array(10)].map(
          (_, idx: number) => <ProductCard.Skeleton key={`skeleton-${idx}`} />,
        );
      }

      return data.apps.data.map(
        (p, idx) => <ProductCard product={p} key={idx} />,
      );
    };

    return (
      <div className="flex-1
        w-full
        max-w-xl
        space-y-8
        mb-12
        px-6
        mx-auto">
        <ul className="mt-4
          space-y-2
          w-full">
          {appList()}
        </ul>
        <div className="flex justify-center">
          <Pagination
            currentPage={page}
            numPages={Math.ceil(count / ITEM_PER_PAGE)}
            onPageChange={handlePageChange} />
        </div>
      </div>
    );
  }, [data, error, count, page]);

  return (
    <>
      <Head>
        <title>Hasil Pencarian Produk Investasi — Piramida</title>
      </Head>

      <div
        ref={container}
        className="flex flex-col justify-end
        flex-1
        w-full
        max-w-xl
        px-6
        mx-auto
        min-h-32 max-h-48
        2xl:max-h-64">
        <h1 className="text-3xl
          md:text-5xl
          md:mb-2
          leading-relaxed
          font-bold">
          Hasil Pencarian
        </h1>

        <SearchInvesment
          absolute={true}
          term={query} />

        {count ? <p className="text-xs md:text-sm text-gray-400 mt-2">
          Menampilkan {count} hasil pencarian per {
            dayjs(version, API_DATE_FORMAT).locale('id').format(DATE_FORMAT)
          }
        </p> : null}
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
  { req, query }: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<SearchPageProps>> {
  let searchParams = '';

  if (query && query.q) {
    searchParams = Array.isArray(query.q) ?
      query.q[0] :
      query.q;
  }

  searchParams = decodeURIComponent(searchParams);

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

  const { origin } =new URL(req.headers.referer);

  const result = await graphQLFetcher<ProductResponse>(
    request,
    {
      query: searchParams,
      limit: ITEM_PER_PAGE,
      offset: 0,
    },
    origin,
  );

  return {
    props: {
      query: searchParams,
      seed: result,
    },
  };
}

export default Search;
