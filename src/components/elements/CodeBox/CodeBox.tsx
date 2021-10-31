import * as React from 'react';

import { getHighlighter, setCDN } from 'shiki';

import { CodeContext } from '@/pages/docs';
import { SpinnerIcon } from '../Icon';

export type CodeBoxProps = {
  lang?: string;
};

/**
 * Code box component which highlights your code with beautiful theme.
 *
 * @param {CodeBoxProps} props code box props
 * @return {JSX.Element} code box
 */
function CodeBox(
  { lang, children }: React.PropsWithChildren<CodeBoxProps>,
): JSX.Element {
  const { highlighter, setHighlighter } = React.useContext(CodeContext);

  React.useEffect(() => {
    if (!highlighter) {
      setCDN('https://unpkg.com/shiki/');

      getHighlighter({
        theme: 'nord',
      }).then((hl) => {
        setHighlighter(hl);
      });
    }
  }, [highlighter, setHighlighter]);

  if (highlighter) {
    return <div dangerouslySetInnerHTML={{ __html: highlighter.codeToHtml(
      children.toString(),
      lang,
    ) }} />;
  }

  return (
    <pre className="relative">
      {children}
      <SpinnerIcon className="w-6 h-6
        absolute
        top-6 right-6
        animate-spin
        text-white" />
    </pre>
  );
}

export default CodeBox;
