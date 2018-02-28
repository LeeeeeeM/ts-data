class Stack<T> {
    private items: T[] = [];
    constructor() {

    }
    pop():T {
        return this.items.pop();
    }
    push(item: T):T[] {
        this.items.push(item);
        return this.items;
    }
    get empty(): boolean {
        return this.items.length === 0;
    }
}

function divideByBase(decNumber: number, base: number) {
    let remStack = new Stack<number>();
    let binaryString: string = '';
    let rem: number;
    let digits: string = '0123456789ABCDEF';
    while(decNumber > 0) {
        rem = decNumber % base;
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }
    while(!remStack.empty) {
        binaryString += digits[remStack.pop()];
    }
    return binaryString;
}

console.log(divideByBase(100, 16))