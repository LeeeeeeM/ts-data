export type f = (...args: any[]) => any ;
// f可能存在副作用 或者不含...hiahiahia
// 只为了包住f内的副作用或者正常函数执行, 只在左后一次执行取值时启动

// 实现一个compose
function compose(...fns: f[]) {
    return function composed(result: any) {
        fns.reverse().reduce(function reducer(result, fn) {
            return fn(result);
        }, result);
    }
}

export class IO {
    constructor(public value: f) {

    }
    static of(x: any): IO {
        return new IO((...rest) => x);
    }

    map(fn: f): IO {
        return new IO(compose(this.value, fn));
    }
}