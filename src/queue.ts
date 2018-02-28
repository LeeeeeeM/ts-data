interface QueueEle <T> {
    element: T;
    priority: number;
}

class PriorityQueue<U> {
    private items: QueueEle<U>[] = [];
    constructor() {

    }

    get empty():boolean {
        return this.items.length === 0;
    }

    enqueue(item: QueueEle<U>): QueueEle<U>[]{

        if (this.empty) {
            this.items.push(item);
        } else {
            let added = false;
            for (let i = 0; i< this.items.length; i++) {
                if (item.priority < this.items[i].priority) {
                    this.items.splice(i, 0, item);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.items.push(item);
            }
        }
        return this.items;
    }
}

export class Queue<T> {
    private items: T[] = [];
    get size():number {
        return this.items.length;
    }
    enqueue(item: T):T[] {
        this.items.push(item);

        return this.items;
    }
    dequeue():T {
        return this.items.shift();
    }
}