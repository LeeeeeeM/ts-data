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
        if (this.root === null) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(node: NodeE<T>, newNode: NodeE<T>) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

} 