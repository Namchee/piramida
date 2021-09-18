import * as React from 'react';

export type APIStatusProps = {
  status: 'ok' | 'not ok';
};

/**
 * API status component. Basically, it displays the API status
 * in the footer.
 *
 * @param {APIStatusProps} params API status props
 * @return {JSX.Element} API status component.
 */
function APIStatus(
  { status }: React.PropsWithoutRef<APIStatusProps>,
): JSX.Element {
  return (
    <div>TODO</div>
  );
}

export default APIStatus;
