import * as React from 'react';

import Status from './Status';

/**
 * Footer component
 *
 * @return {JSX.Element} Footer component
 */
function Footer(): JSX.Element {
  return (
    <footer className="flex justify-center">
      <div
        className="flex justify-between
        w-full max-w-6xl"
      >
        <Status status={'ok'} />
        <div className="text-center">
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
        <div>
          <button>TODO</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
