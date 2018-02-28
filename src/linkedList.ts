// 居然可以循环引用... type

type link<T> = NodeE<T> | null;

type lll = number | string;

class NodeE<T> {
    public next: link<T> = null;
    constructor(private element: T) {
    }
}

export class LinkedList<T> {
    private head: NodeE<T> = null;
    private length: number = 0;

    append(element: T):void {
        let node = new NodeE(element);
        let current: NodeE<T>;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    removeAt(pos: number): void {
        if (pos > -1 && pos < this.length) {
            let current: NodeE<T> = this.head;
            let previous: NodeE<T>;
            let index: number = 0;
            if (pos === 0) {
                this.head = current.next;
            } else {
                while(index++ < pos) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.length--;

        } else {
            // xxx 啥也不干
        }
    }
}
