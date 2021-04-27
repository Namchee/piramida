import { useLayoutEffect, useEffect } from 'react';

const useIsomorphicLayoutEffect =
  typeof window !== undefined && typeof process === undefined ?
    useLayoutEffect :
    useEffect;

export default useIsomorphicLayoutEffect;
