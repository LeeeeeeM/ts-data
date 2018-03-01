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

    insert(ele: T, pos: number): boolean {
        if (pos >=0 && pos <= this.length) {
            let node = new NodeE(ele);
            let current = this.head;
            let previous: dLink<T>;
            let index = 0;
            if (pos === 0) {
                if (!this.head) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head;
                    current.prev = node;
                    this.head = node;
                }
            } else if (pos === this.length) {
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else  {
                while (index++ < pos) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            this._length++;
            return true;
        } else {
            return false;
        }
    }

    removeAt(pos: number): T | boolean {
        if (pos > -1 && pos < this.length) {
            let current = this.head;
            let previous: dLink<T>;
            let index = 0;
            if (pos === 0) {
                this.head = current.next;
                if (this.length === 1) {
                    this.tail = null;
                } else {
                    this.head.prev = null;
                }
            } else if (pos === this.length - 1) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
            } else {
                while(index++ < pos) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            this._length--;
            return current.element;
        } else {
            return false
        }
    }

}