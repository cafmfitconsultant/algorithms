class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.rigth = null;
    }
}

const root = new Node(1);
const b = new Node(7);
const c = new Node(3);
const d = new Node(10);
const e = new Node(4);
const f = new Node(9);
root.right = b;
root.left = c;
c.right = d;
d.right = e;
e.left = f;

module.exports = root;

//           root
//           / \
//          c   b
//           \
//            d
//             \
//              e
//             /
//            f