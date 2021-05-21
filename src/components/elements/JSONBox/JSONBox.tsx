import * as React from 'react';

import Prism from 'prismjs';
import 'prismjs/components/prism-json';
import 'prism-themes/themes/prism-atom-dark.css';

function JSONBox({ children }: React.PropsWithChildren<{}>) {
  const codeBlock = React.useRef(null);

  React.useEffect(() => {
    Prism.highlightElement(codeBlock.current);
  }, []);

  return (
    <pre ref={codeBlock} className="language-json" style={{ borderRadius: '.5rem' }}>
      {children}
    </pre>
  );
}

export default JSONBox;
