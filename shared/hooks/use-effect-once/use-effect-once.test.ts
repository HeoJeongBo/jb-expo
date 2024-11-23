import { renderHook } from '@testing-library/react-native';
import useEffectOnce from './use-effect-once';

const mockEffectCleanup = jest.fn();
const mockEffectCallback = jest.fn().mockReturnValue(mockEffectCleanup);

it('should run effect only once', () => {
  const { rerender } = renderHook(() => useEffectOnce(mockEffectCallback));

  expect(mockEffectCallback).toHaveBeenCalledTimes(1);

  rerender({});

  expect(mockEffectCallback).toHaveBeenCalledTimes(1);
});

const mockEffectCleanup2 = jest.fn();
const mockEffectCallback2 = jest.fn().mockReturnValue(mockEffectCleanup2);

it('should run cleanup when unmounted', () => {
  const { unmount } = renderHook(() => useEffectOnce(mockEffectCallback2));

  expect(mockEffectCleanup2).not.toHaveBeenCalled();

  unmount();

  expect(mockEffectCleanup2).toHaveBeenCalledTimes(1);
});
