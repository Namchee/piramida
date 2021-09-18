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
    <footer className="flex justify-center py-8 border-t border-gray-200">
      <div
        className="grid grid-cols-[1fr,auto,1fr]
        w-full max-w-6xl"
      >
        <div>
          <Status />
        </div>
        <div className="flex items-center">
          <p>
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
        <div className="flex items-center justify-end">
          <a
            href="https://github.com/Namchee/piramida"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GitHubIcon
              className="w-6 h-6
              text-gray-400
              hover:text-gray-700
              transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
