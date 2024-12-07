import Storage from './storage.instance';
import type { StorageKey, StorageSchema } from './storage.schema';

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
