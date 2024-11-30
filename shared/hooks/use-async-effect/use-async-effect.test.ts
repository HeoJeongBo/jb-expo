import { renderHook, waitFor } from '@testing-library/react-native';
import useAsyncEffect from './use-async-effect';
import { useCallback } from 'react';

describe('useAsyncEffect', () => {
  it('should run effect with async', async () => {
    const asyncFn = jest.fn().mockReturnValue(Promise.resolve());

    renderHook(() => useAsyncEffect(asyncFn));

    expect(asyncFn).toHaveBeenCalledTimes(1);
  });

  it('should run effect with async and dependencies', async () => {
    let callCount = 0;

    const asyncFn = async (counter: number) => {
      callCount++;

      //   TODO >> TestCode 좀 더 공부 후 완성 예정
      return `counter is ${counter} and callCount is ${callCount}`;
    };

    const { rerender } = renderHook(
      ({ fn, counter }) => {
        const callback = useCallback(() => fn(counter), [counter]);

        return useAsyncEffect(callback, [callback]);
      },
      {
        initialProps: {
          counter: 0,
          fn: asyncFn,
        },
      },
    );

    expect(callCount).toBe(1);

    await waitFor(() => rerender({ fn: asyncFn, counter: 2 }));

    expect(callCount).toBe(2);
  });
});
