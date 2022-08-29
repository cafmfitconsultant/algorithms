class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.rigth = null;
    }
}

const root = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

root.righ = b;
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