// 专门用来测试

import { hotPotato } from './hotPotapo';

import {LinkedList} from './linkedList';

import {TI} from './type_interface';

console.log(LinkedList);

var a = new LinkedList<number>();

a.append(1);
a.append(2);

a.append(12);

a.append(2222);
console.log(a);
a.removeAt(2);

a.insert(3, 11);

console.log(a);

console.log(TI);

TI.createObject(TI.People, '哈哈', 1);
TI.createObject(TI.People);
TI.createObject(TI.People, '哈哈哈');