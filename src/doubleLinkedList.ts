type dLink<T> = NodeE<T> | null;

class NodeE<T> {
    private _next: dLink<T> = null;
    private _prev: dLink<T> = null;
    constructor(private _element: T) {

    }
    get element(): T {
        return this._element;
    }
    set element(ele: T) {
        this._element = ele;
    }
    get next(): dLink<T> {
        return this._next;
    }
    set next(ele: dLink<T>) {
        this._next = ele;
    }
    get prev(): dLink<T> {
        return this._prev;
    }
    set prev(ele: dLink<T>) {
        this._prev = ele;
    }
}

export class DoubleLinkedList<T> {
    private _length: number = 0;

    private head: dLink<T> = null;
    private tail: dLink<T> = null;

    get length(): number {
        return this._length;
    }

    insert(ele: dLink<T>, pos: number): boolean {
        if (pos === 0) {
            return true;
        } else {
            return false;
        }
    }

    removeAt(pos: number): boolean {
        return false;
    }

}