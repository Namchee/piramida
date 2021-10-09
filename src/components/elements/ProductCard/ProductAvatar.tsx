/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import { getInitial } from '@/utils/string';
import { fetchFavicons } from '@namchee/favify';

export type AvatarProps = {
  page: string;
  alt: string;
}

/**
 * Get best favicon from a webpage
 *
 * @param {string} url webpage url
 * @return {Promise<string>} best favicon to use from the webpage
 */
async function getBestFavicon(url: string): Promise<string> {
  const favicons = await fetchFavicons(url);

  const svg = favicons.filter((v) => v.type === 'image/svg+xml');

  if (svg) {
    return svg[0].path;
  }

  const png = favicons.filter((v) => v.type === 'image/png').sort((a, b) => {
    if (!a.size) {
      return -1;
    }

    if (!b.size) {
      return 1;
    }

    return a.size > b.size ? -1 : 1;
  });

  if (png) {
    return png[0].path;
  }

  return favicons.filter((v) => v.type === 'image/ico')[0].path;
}

/**
 * Product avatar component. Used to display company's favicon
 *
 * @param {AvatarProps} props avatar props
 * @return {JSX.Element} avatar component
 */
function ProductAvatar(
  { page: image, alt }: React.PropsWithoutRef<AvatarProps>,
): JSX.Element {
  const [source, setSource] = React.useState('');
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
      /*
    if (image) {
      getBestFavicon(image).then((url) => setSource(url))
        .catch((err) => console.log(err));
    }
    */
  }, [image]);

  React.useEffect(() => {
    if (source) {
      const img = new Image();
      img.onload = () => setIsLoaded(true);

      img.src = source;
    }
  }, [source]);

  const children = React.useMemo(() => {
    if (!isLoaded) {
      return <span className="uppercase text-white text-lg">
        {getInitial(alt)}
      </span>;
    }

    return <img
      src={source}
      width="32"
      height="32"
      className="w-8 h-8"
      alt={alt}
      title={alt}
    />;
  }, [alt, source, isLoaded]);

  return (
    <div
      role="image"
      className={`relative
        bg-primary
        grid place-items-center
        w-12 h-12
        overflow-hidden
        rounded-full`}>
      {children}
    </div>
  );
}

export default ProductAvatar;
