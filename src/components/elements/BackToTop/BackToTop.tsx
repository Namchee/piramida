import * as React from 'react';

import { useSpring, animated } from 'react-spring';

import { useWindowEvent } from '@/hooks/useWindowEvent';

import { ArrowUpIcon } from '@/components/elements/Icon';

export type BackToTopProps = {
  offset?: number;
}

/**
 * BackToTop creates a back-to-top button that can be
 * used to instantly scroll to top of the page.
 *
 * @param {BackToTopProps} props back to top props
 * @return {JSX.Element} back to top button.
 */
function BackToTop(
  { offset }: React.PropsWithoutRef<BackToTopProps>,
): JSX.Element {
  const [tick, setTick] = React.useState(false);
  const [isShown, setIsShown] = React.useState(false);

  const props = useSpring({
    to: {
      transform: 'scale(1)',
    },
    from: {
      transform: 'scale(0)',
    },
    reverse: !isShown,
  });

  useWindowEvent('scroll', () => {
    const scrollOffset = offset || 768;
    const scrollPos = window.scrollY;

    if (!tick) {
      window.requestAnimationFrame(() => {
        setIsShown(scrollPos >= scrollOffset);
        setTick(false);
      });

      setTick(true);
    }
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <animated.button
      onClick={scrollToTop}
      style={props}
      aria-label="Back To Top"
      className="bg-primary-dark
        hover:bg-primary
        rounded-full
        p-4
        transition-colors
        fixed z-10
        bottom-6 right-6
        md:bottom-8 md:right-12
        focus:outline-none
        focus:ring focus:ring-primary-light focus:ring-opacity-50">
      <ArrowUpIcon className="w-6 h-6 text-white stroke-width-10" />
    </animated.button>
  );
}

export default BackToTop;
