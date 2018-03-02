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

    max(): T {
        return this.maxNode(this.root); 
    }

    maxNode(node: NodeE<T>): T {
        while (node && node.right) {
            node = node.right;
        }
        return node.key;
    }

    min(): T {
        return this.minNode(this.root);
    }

    minNode(node: NodeE<T>): T {
        while(node && node.left) {
            node = node.left;
        }
        return node.key;
    }

    search(key: T): boolean {
        return this.searchNode(this.root, key);
    }

    searchNode(node: NodeE<T>, key: T): boolean {
        
        if (node === null) {
            return false;
        }

        if (key < node.key) {
            this.searchNode(node.left, key);
        } else if (key > node.key) {
            this.searchNode(node.right, key);
        } else {
            return true;
        }
    }

    remove(key: T): NodeE<T> {
        return this.removeNode(this.root, key);
    }

    removeNode(node: NodeE<T>, key: T): NodeE<T> {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            }

            if (node.right === null) {
                node = node.left;
                return node;
            }

            // 拥有左右节点的node
            let minNode = this.minNode(node.right);
            console.log(minNode);
            node.right = this.removeNode(node.right, minNode);
            node.key = minNode; // 如果还有其他属性，需要新建一个NodeE元素
            return node;
        }
    }
} 