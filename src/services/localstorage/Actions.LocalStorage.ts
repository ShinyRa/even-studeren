import LocalStorageService from './LocalStorage.service'

class ActionsLocalStorage extends LocalStorageService { 

    static add(key: string, value: string) { 
        localStorage.getItem(key) === null
            ? localStorage.setItem(key, value)
            : console.log(`Key '${key}' is already in localStorage.`);
    }

    static update(key: string, value: string) { 
        localStorage.getItem(key)
            ? localStorage.setItem(key, value)
            : console.log(`Key '${key}' does not exist in localStorage.`);

    }

    static remove(key: string) { 
        localStorage.getItem(key)
        ? localStorage.removeItem(key)
        : console.log(`Key '${key}' does not exist in localStorage.`);

    }

    static get(key: string): string | null { 
        const item = localStorage.getItem(key)
        return item ? item : null
    }
}

export default ActionsLocalStorage
