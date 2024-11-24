import { MMKV } from 'react-native-mmkv';
import type { StorageKey, StorageSchema } from './storage.schema';

class Storage {
  private store: MMKV;

  constructor() {
    this.store = new MMKV({
      id: 'jb-expo-mmkv',
      encryptionKey: 'hunter2',
    });
  }

  set(key: StorageKey, value: StorageSchema[StorageKey]) {
    this.store.set(key, JSON.stringify(value));
  }

  get(key: StorageKey): StorageSchema[StorageKey] | undefined {
    const value = this.store.getString(key);

    if (!value) {
      return undefined;
    }

    return JSON.parse(value);
  }

  remove(key: StorageKey) {
    this.store.delete(key);
  }
}

export default new Storage();
