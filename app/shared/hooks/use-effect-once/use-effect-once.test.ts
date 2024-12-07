import { renderHook } from '@testing-library/react-native';
import useEffectOnce from './use-effect-once';

const createMockEffect = () => {
  const cleanup = jest.fn();
  const callback = jest.fn().mockReturnValue(cleanup);
  return { cleanup, callback };
};

describe('useEffectOnce', () => {
  it('should run effect only once', () => {
    const { callback } = createMockEffect();
    const { rerender } = renderHook(() => useEffectOnce(callback));

    expect(callback).toHaveBeenCalledTimes(1);

    rerender({});

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should run cleanup when unmounted', () => {
    const { cleanup, callback } = createMockEffect();
    const { unmount } = renderHook(() => useEffectOnce(callback));

    expect(cleanup).not.toHaveBeenCalled();

    unmount();

    expect(cleanup).toHaveBeenCalledTimes(1);
  });
});
