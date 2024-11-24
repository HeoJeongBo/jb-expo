import Storage from './storage.instance';
import type { StorageKey, StorageSchema } from './storage.schema';

jest.mock('react-native-mmkv', () => {
  const mockData: Record<string, string> = {};

  return {
    MMKV: jest.fn().mockImplementation(() => ({
      set: jest.fn((key: string, value: string) => {
        mockData[key] = value;
      }),
      getString: jest.fn((key: string) => mockData[key] || null),
      delete: jest.fn((key: string) => {
        delete mockData[key];
      }),
    })),
  };
});

describe('Storage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should set a value', () => {
    const key: StorageKey = 'theme';
    const value: StorageSchema[StorageKey] = 'dark';

    Storage.set(key, value);

    const storageValue = Storage.get(key);

    console.log('STORAGE VALUE', storageValue);

    expect(storageValue).toEqual(value);
  });
});
