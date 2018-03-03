// 专门用来测试

import {BST} from './bst';

import {LRU} from './lru';

import {HashMap} from './hashMap';

var hm = new HashMap<string, any>();

hm.put('14', 123);
hm.put('23', 12322);

hm.put('sss', 123);

console.log(hm);
console.log(hm.get('23'));

setTimeout(() => {
    console.log(hm.remove('23'));
    hm.remove('sss');
    console.log(hm);
}, 1000);