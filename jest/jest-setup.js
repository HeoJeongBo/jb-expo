/* global jest */
import 'react-native-gesture-handler/jestSetup';
// IMPORTANT: this is what's used in the native runtime
import 'react-native-url-polyfill/auto';

import { configure } from '@testing-library/react-native';

configure({ asyncUtilTimeout: 20000 });

jest.mock('react-native-safe-area-context', () => {
  const inset = { top: 0, right: 0, bottom: 0, left: 0 };
  return {
    SafeAreaProvider: jest.fn().mockImplementation(({ children }) => children),
    SafeAreaConsumer: jest
      .fn()
      .mockImplementation(({ children }) => children(inset)),
    useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
  };
});
