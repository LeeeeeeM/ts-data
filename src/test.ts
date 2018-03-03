// 专门用来测试

import {BST} from './bst';

import {IO, f as F} from './container/io';

import {LRU} from './lru';

var a = new IO(function(xxx) {
    console.log(xxx + 'xxx');
    console.log('step into function');
});

var b = a.map(function(xxx) {
    return xxx;
});
b.value(12312);



var ccc = new BST<number>();

ccc.insert(10);
ccc.insert(9);
ccc.insert(16);
ccc.insert(12);
ccc.insert(5);
ccc.insert(4);
ccc.insert(11);
ccc.insert(17);
ccc.insert(23);
ccc.insert(29);
ccc.insert(18);
ccc.insert(19);

ccc.inOrderTraverse(function(item) {
    console.log(item, 'inorderTraverse');
});

ccc.remove(16);

// ccc.remove();

var ssss = new LRU({
    maxSize: 3
});

ssss.set(1, 2);
ssss.set(3, 2);
ssss.set(2, 2);
ssss.set(5, 2);
ssss.set(4, 2);
ssss.set(3, 2);

ssss.set(1, 222);
console.log(ssss);