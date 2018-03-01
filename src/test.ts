// 专门用来测试

import {BST} from './bst';

let a = new BST<number>();

a.insert(14);

a.insert(199);
a.insert(7);
a.insert(80);
a.insert(11);
a.insert(90);
a.insert(100);

console.log(a);