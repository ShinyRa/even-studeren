import LocalStorageService from './LocalStorage.service'

class ActionsLocalStorage extends LocalStorageService { 

    static add(key: string, value: string) { 
        this.database.getItem(key) === null
            ? this.database.setItem(key, value)
            : console.log(`Key '${key}' is already in localStorage.`);
    }

    static update(key: string, value: string) { 
        this.database.getItem(key)
            ? this.database.setItem(key, value)
            : console.log(`Key '${key}' does not exist in localStorage.`);

    }

    static remove(key: string) { 
        this.database.getItem(key)
        ? this.database.removeItem(key)
        : console.log(`Key '${key}' does not exist in localStorage.`);

    }

    static get(key: string): string | null { 
        const item = this.database.getItem(key)
        return item ? item : null
    }

}

export default ActionsLocalStorage
