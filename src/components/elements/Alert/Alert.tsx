import * as React from 'react';

import { CloseIcon } from '@/components/elements/Icon';

export type AlertProps = {
  theme?: string;
  marginTop?: number;
  dismissable?: boolean;
};

/**
 * Alert dialog component
 *
 * @param {AlertProps} props alert props
 * @return {JSX.Element} alert component
 */
function Dialog({
  theme,
  children,
  dismissable,
  marginTop,
}: React.PropsWithChildren<AlertProps>): JSX.Element {
  const [isVisible, setIsVisible] = React.useState(true);

  const baseClass = React.useMemo((): string => {
    const baseTheme = [
      'flex',
      'justify-between',
      'align-center',
      'p-4',
      'rounded-md',
    ];

    if (marginTop) {
      baseTheme.push(`mt-${marginTop}`);
    }

    if (theme) {
      baseTheme.push(`bg-${theme}-100`);
    }

    return baseTheme.join(' ');
  }, [marginTop, theme]);

  if (!isVisible) {
    return null;
  }

  const closeBtn = () => {
    if (!dismissable) {
      return null;
    }

    const buttonClass = (): string => {
      const base = [
        'w-6',
        'h-6',
        'rounded-full',
        'transition-colors',
        'grid',
        'place-items-center',
      ];

      if (theme) {
        base.push(`hover:bg-${theme}-200`);
      }

      return base.join(' ');
    };

    const iconClass = (): string => {
      const base = ['w-4', 'h-4'];

      if (theme) {
        base.push(`text-${theme}-700`);
      }

      return base.join(' ');
    };

    return (
      <button
        aria-label="Close Alert"
        className={buttonClass()}
        onClick={() => setIsVisible(false)}
      >
        <CloseIcon className={iconClass()} />
      </button>
    );
  };

  return (
    <div className={baseClass}>
      {children}
      {closeBtn()}
    </div>
  );
}

export default Dialog;
