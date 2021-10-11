import * as React from 'react';

import * as NextImage from 'next/image';

import { getInitial } from '@/utils/string';
import { FAVICON_SIZE } from '@/common/constants';

export type AvatarProps = {
  page: string;
  alt: string;
}

/**
 * Get favicon URL from a page string using faviconkit's API
 *
 * @param {string} page product page
 * @return {string} faviconkit's URL
 */
function getImageURL(page: string): string {
  const { hostname } = new URL(page);

  return hostname.indexOf('play.google.com') > -1 ?
    '':
    `https://www.google.com/s2/favicons?sz=${FAVICON_SIZE}&domain=${hostname}`;
}

/**
 * Product avatar component. Used to display company's favicon.
 * TODO: Use this
 *
 * @param {AvatarProps} props avatar props
 * @return {JSX.Element} avatar component
 */
function ProductAvatar(
  { page, alt }: React.PropsWithoutRef<AvatarProps>,
): JSX.Element {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const source = React.useMemo((): string => {
    return getImageURL(page);
  }, [page]);

  const placeholder = React.useMemo((): JSX.Element => {
    if (isLoaded) {
      return null;
    }

    return <span
      className="absolute
        grid place-items-center
        z-1
        uppercase
        text-xs
        rounded-lg
        text-white
        w-8 h-full
        bg-primary">
      {getInitial(alt)}
    </span>;
  }, [alt, isLoaded]);

  return (
    <div className="inline relative
      rounded-lg
      grid place-items-center
      overflow-hidden">
      {placeholder}
      {source && <NextImage.default
        src={source}
        onLoadingComplete={() => setIsLoaded(true)}
        className={isLoaded ? '' : 'hidden'}
        width="32"
        height="32"
        alt={alt}
        title={alt}
      />}
    </div>
  );
}

export default ProductAvatar;
