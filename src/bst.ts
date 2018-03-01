class NodeE<T> {
    public left: NodeE<T> = null;
    public right: NodeE<T> = null;
    constructor(public key: T) {

    }
}


export class BST<T> {
    public root: NodeE<T> = null;

    insert(ele: T):void {

        let node: NodeE<T> = new NodeE(ele);

    }

} 