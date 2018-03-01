// 专门用来测试

import { hotPotato } from './hotPotapo';

import {LinkedList} from './linkedList';

import {TI} from './type_interface';

import {DoubleLinkedList} from './doubleLinkedList';

var a = new LinkedList<number>();

var dll = new DoubleLinkedList<number>();

dll.insert(1, 0);
dll.insert(2, 0);
dll.insert(2, 1);
console.log(dll);

dll.removeAt(1);
console.log(dll);

TI.createObject(TI.People, '哈哈', 1);
TI.createObject(TI.People);
TI.createObject(TI.People, '哈哈哈');