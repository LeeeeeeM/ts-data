import {LinkedList} from './linkedList';

class Pair<T,U> {
    constructor(public key: T, public value: U) {

    }
    toString<T, U>(): void {
        console.log(this.key, this.value);
    };
}

function looseHashCode(key: string):number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % 37;
}

export class HashMap<K extends string, V> {
    public table: LinkedList<Pair<K, V>>[] = [];
    constructor() {

    }

    put(key: K, value: V) {
        let pos = looseHashCode(key);
        if (this.table[pos] === undefined) {
            this.table[pos] = new LinkedList<Pair<K, V>>();
        }
        this.table[pos].append(new Pair(key, value));
    }

    get(key: K): V {
        let pos = looseHashCode(key);
        if (this.table[pos] !== undefined) {
            let current = this.table[pos].getHead();
            while(current.next) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }
            if (current.element.key === key) {
                return current.element.value;
            }
        }
        return undefined;
    }

    remove(key: K): boolean {
        let pos = looseHashCode(key);
        if (this.table[pos] !== undefined) {
            let current = this.table[pos].getHead();
            while(current.next) {
                if (current.element.key === key) {
                    this.table[pos].remove(current.element);
                    if (this.table[pos].isEmpty()) {
                        this.table[pos] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            if (current.element.key === key) {
                this.table[pos].remove(current.element);
                if (this.table[pos].isEmpty()) {
                    this.table[pos] = undefined;
                }
                return true;
            }
        }
        return false;
    }
}