import { Queue }  from './queue';

// 烫手山芋.., 谁都不想要

export function hotPotato<T>(nameList: T[] , num: number): T {
    let queue  = new Queue<T>();

    let indexItem: T;

    for (let i = 0; i< nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }

    while(queue.size > 1) {
        for (let i = 0; i< num; i++) {
            queue.enqueue(queue.dequeue());
        }
        indexItem = queue.dequeue();
        console.log(indexItem);
    }
    return queue.dequeue();
}
