import * as React from 'react';

import Status from './Status';
import GitHubIcon from '@/components/elements/Icon/GithubIcon';

/**
 * Footer component
 *
 * @return {JSX.Element} Footer component
 */
function Footer(): JSX.Element {
  return (
    <footer className="flex justify-center
      py-6
      border-t border-gray-200"
    >
      <div
        className="grid
          grid-cols-1
          px-6
          <md:space-y-4
          md:grid-cols-[1fr,auto,1fr]
          w-full max-w-6xl"
      >
        <div className="<md:mx-auto">
          <Status />
        </div>
        <div className="flex items-center
          <md:mx-auto">
          <p className="<md:text-center <md:text-sm">
            Data diambil dari situs{' '}
            <a
              href="https://ojk.go.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark"
            >
              Otoritas Jasa Keuangan Republik Indonesia
            </a>
          </p>
        </div>
        <div className="flex items-center justify-end
          <md:mx-auto">
          <a
            href="https://github.com/Namchee/piramida"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Kode sumber Piramida"
          >
            <GitHubIcon
              className="w-6 h-6
              text-gray-500
              hover:text-gray-700
              transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
