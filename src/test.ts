// 专门用来测试

import { hotPotato } from './hotPotapo';

import {LinkedList} from './linkedList'

console.log(LinkedList);

var a = new LinkedList<number>();

a.append(1);
a.append(2);

a.append(12);

a.append(2222);
console.log(a);
a.removeAt(2);

console.log(a);
