import ActionsLocalStorage from '../Actions.LocalStorage';

/**
 * LocalStorage mock object which mimics the localStorage of a browser
 * 
 */
class LocalStorageMock implements Storage {
  private store: { [key: string]: string } = {};

  getItem(key: string): string | null {
    return this.store[key] || null;
  }

  setItem(key: string, value: string): void {
    this.store[key] = value.toString();
  }

  removeItem(key: string): void {
    delete this.store[key];
  }

  clear(): void {
    this.store = {};
  }

  get length(): number {
    return Object.keys(this.store).length;
  }

  key(index: number): string | null {
    const keys = Object.keys(this.store);
    return index >= 0 && index < keys.length ? keys[index] : null;
  }
}
global.localStorage = new LocalStorageMock();


describe('ActionsLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear(); // Clear localStorage before each test
  });

  it('should add key-value pair to localStorage', () => {
    ActionsLocalStorage.add('testKey', 'testValue');
    expect(localStorage.getItem('testKey')).toEqual('testValue');
  });

  it('should update existing key-value pair in localStorage', () => {
    localStorage.setItem('existingKey', 'oldValue');
    ActionsLocalStorage.update('existingKey', 'newValue');
    expect(localStorage.getItem('existingKey')).toEqual('newValue');
  });

  it('should remove key-value pair from localStorage', () => {
    localStorage.setItem('keyToRemove', 'valueToRemove');
    ActionsLocalStorage.remove('keyToRemove');
    expect(localStorage.getItem('keyToRemove')).toBeNull();
  });

  it('should get value for a given key from localStorage', () => {
    localStorage.setItem('keyToGet', 'valueToGet');
    const value = ActionsLocalStorage.get('keyToGet');
    expect(value).toEqual('valueToGet');
  });

  it('should return null when getting value for non-existing key from localStorage', () => {
    const value = ActionsLocalStorage.get('nonExistingKey');
    expect(value).toBeNull();
  });


  // TODO: Add more edge cases! These tests do not cover everything
});
