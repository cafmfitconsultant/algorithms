
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert = (value) => {
        const node = new Node(value);
        if (this.root === null) {
            this.root = node;
            return this;
        }
        let current = this.root;
        while (true) {
            if (current.value === node.value)
                return undefined;
            if (node.value < current.value) {
                if (current.left === null) {
                    current.left = node;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find = (value) => {
        if (this.root === null) {
            return null;
        }
        let current = this.root;
        while (current) {
            if (current.value === value)
                return current;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return current;
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(7);
binaryTree.insert(11);
binaryTree.insert(16);
console.log(binaryTree.find(5));
