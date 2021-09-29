import * as React from 'react';

import Image from 'next/image';

export type ErrorResultProps = {
  error?: string;
}

/**
 * Component to be shown when the search returns an unexpected error.
 *
 * @return {JSX.Element} error report component
 */
function ErrorResult(
  { error }: React.PropsWithoutRef<ErrorResultProps>,
): JSX.Element {
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.error(error);
    }
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center
      text-center
      p-8
      max-w-xl">
      <Image
        src="/images/error-result.svg"
        width="full"
        height="full"
        alt="Terjadi kesalahan pada sistem"
      />

      <h1 className="mt-4 text-gray-600
        leading-relaxed
        tracking-tight">
        Kesalahan Sistem
      </h1>

      <p className="text-sm
        text-gray-400
        mb-8">
        Terdapat kesalahan pada sistem. Silahkan coba lagi
        dalam beberapa saat.
      </p>
    </div>
  );
}

export default ErrorResult;
