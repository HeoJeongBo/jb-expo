import { AsyncFunction } from '@/shared/types/ts.type';
import { DependencyList, useEffect } from 'react';

const useAsyncEffect = (fn: AsyncFunction, deps: DependencyList = []) => {
  useEffect(() => {
    fn();
  }, deps);
};

export default useAsyncEffect;
