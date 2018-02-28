function logClass(target: any) {
    var original = target;
    function construct(constructor: any, args: any[]){
        var c: any = function() {
            return construct.apply(this, args);
        }
        c.prototype = constructor.prototype;
        return new c();
    }
    var f: any = function(...args: any[]) {
        console.log('God bless' + args[0]);
        return construct(original, args);
    }
    f.prototype = original.prototype;
    return f;
}

@logClass
class Hero {
    public name: string
    public power: string
    constructor(name: string, power: string) {
        this.name = name
        this.power = power
    }
    showPower(){
    	return `${this.name} has special power: ${this.power}`
    }
}