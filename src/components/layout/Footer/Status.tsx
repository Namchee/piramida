import * as React from 'react';

import useSWR from 'swr';

import { getFetcher } from '@/utils/fetcher';
import { APIResult, StatusEndpointResult } from '@/common/types';

/**
 * API status component. Basically, it displays the API status
 * in the footer.
 *
 * @return {JSX.Element} API status component.
 */
function APIStatus(): JSX.Element {
  const { data, error } = useSWR<APIResult<StatusEndpointResult, string> >(
    '/status',
    getFetcher,
  );

  const indicatorClass = React.useMemo((): string => {
    const baseClass = [
      'rounded-full',
      'w-12px',
      'h-12px',
      '<md:w-8px',
      '<md:h-8px',
    ];

    if (!data) {
      baseClass.push('bg-gray-400');
    } else {
      baseClass.push(error || data.error ? 'bg-red-500' : 'bg-primary');
    }

    return baseClass.join(' ');
  }, [data, error]);

  const text = React.useMemo((): string => {
    if (!data) {
      return 'Loading';
    }

    return error || data.error ? 'Error' : 'Stable';
  }, [data, error]);

  const textClass = React.useMemo(() => {
    const baseClass = ['mt-0.5', 'w-14', '<md:w-12'];

    if (!data) {
      baseClass.push('text-gray-500');
    } else {
      baseClass.push('font-bold');

      baseClass.push(error || data.error ? 'text-red-500' : 'text-primary');
    }

    return baseClass.join(' ');
  }, [data, error]);

  return (
    <div className="inline-flex items-center justify-between
      border-gray-200
      border
      py-1 px-4
      rounded-sm
      <md:text-sm">
      <p className="mr-2">
        Status:
      </p>
      <p className="flex items-center space-x-2">
        <span className={indicatorClass}></span>
        <span role="status" className={textClass}>{text}</span>
      </p>
    </div>
  );
}

export default APIStatus;
