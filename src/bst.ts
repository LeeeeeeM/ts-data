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

    inOrderTraverse(fn: (...args: any[]) => any): void {
        this.inOrderTraverseNode(this.root, fn);
    }

    inOrderTraverseNode(node: NodeE<T>, fn: (...args: any[]) => any): void {
        if (node !== null) {
            this.inOrderTraverseNode(node.left, fn);
            fn(node.key);
            this.inOrderTraverseNode(node.right, fn);
        }
    }

    preOrderTraverse(fn: (...args: any[]) => any): void {
        this.preOrderTraverseNode(this.root, fn);
    }

    preOrderTraverseNode(node: NodeE<T>, fn: (...args: any[]) => any): void {
        if (node !== null) {
            fn(node.key);
            this.preOrderTraverseNode(node.left, fn);
            this.preOrderTraverseNode(node.right, fn);
        }
    }

    postOrderTraverse(fn: (...args: any[]) => any): void {
        this.postOrderTraverseNode(this.root, fn);
    }

    postOrderTraverseNode(node: NodeE<T>, fn: (...args: any[]) => any): void {
        if (node !== null) {
            this.postOrderTraverseNode(node.left, fn);
            this.postOrderTraverseNode(node.right, fn);
            fn(node.key);
        }
    }

} 