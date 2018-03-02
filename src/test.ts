// 专门用来测试

import {BST} from './bst';

import {IO, f as F} from './container/io';

var a = new IO(function(xxx) {
    console.log(xxx + 1);
    console.log('ssssss');
});

var b = a.map(function(xxx) {
    return xxx;
});
b.value(12312);