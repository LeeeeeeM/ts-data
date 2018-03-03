// inspired by  https://github.com/sindresorhus/quick-lru/blob/master/index.js

interface Option {
    maxSize: number
}

export class LRU {
    public cache: Map<any, any>;
    public oldCache: Map<any, any>;
    public _size: number = 0;
    constructor(public options: Option) {
        this.cache = new Map();
        this.oldCache = new Map();
    }

    _set(key: any, value: any) {
        this.cache.set(key, value);
        this._size++;
        if (this._size >= this.options.maxSize) {
            this._size = 0;
            this.oldCache = this.cache;
            this.cache = new Map();
        }
    }

    get(key: any) {
        if (this.cache.has(key)) {
            return this.cache.get(key);
        }
        if (this.oldCache.has(key)) {
            let value = this.oldCache.get(key);
            this._set(key, value);
            return value;
        }
    }

    has(key: any): boolean {
        return this.cache.get(key) || this.oldCache.get(key);
    }

    set(key: any, value: any) {
        if (this.cache.has(key)) {
            this.cache.set(key, value);
        } else {
            this._set(key, value);
        }
        return this;
    }

    clear() {
        this.cache.clear();
        this.oldCache.clear();
        this._size = 0;
    }

    delete(key: any) {
        if (this.cache.delete(key)) {
            this._size--;
        }
        this.oldCache.delete(key);
    }

    get size(): number {
        let oldCacheSize: number = 0;
        for (let key of this.oldCache) {
            if (!this.cache.has(key)) {
                oldCacheSize++;
            }
        }
        return this._size + oldCacheSize;
    }

}