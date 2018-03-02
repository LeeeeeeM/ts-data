// Just

class Maybe<T> {
    constructor(public value: T) {

    }
    static of<U>(ele: U): Maybe<U> {
        return new Maybe<U>(ele);
    }
    isNothing(): boolean {
        return this.value === null || this.value === undefined;
    }
    map(f: (value: any) => any): Maybe<T> {
        // 如果是isNothing不对map执行，永远停留在null
        return this.isNothing() ? Maybe.of<T>(null) : Maybe.of<T>(this.value);
    }
}