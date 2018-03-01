// 演示当接口和类都需要泛型的时候放在方法里面
interface A {
    insert<T>(ele: T): void;
}

export class B<U> implements A {
    constructor(private aaa: U) {

    }
    insert<T>(ele: T): void {
        console.log(ele);
        console.log(this.aaa);
    }
}

// ----------------------------------------//


export namespace TI {
    export interface Speak {
        speak():void;
    }
    
    interface Con {
        new(name: string, age: number): Speak;
        new(name: string): Speak;
        // new(age: number): b;
        new(): Speak;
    }
    
    export class People implements Speak {
        constructor(public name?: string, public age?: number) {
            if (age && name) {
                console.log('同时输入两个参数的构造器');
                return;
            }
            if (!age && !name) {
                console.log('无参数构造器');
                return;
            }
            if (!age) {
                console.log('没有年龄age的构造器');
                return;
            }
            if (!name) {
                console.log('没有名字name的构造器');
                return;
            }
        }
        speak() {
            console.log(this.name, this.age);
        }
    }
    
    export function createObject(ctr: Con, name?: string, age?: number): Speak {
        return new ctr(name, age);
    }
}