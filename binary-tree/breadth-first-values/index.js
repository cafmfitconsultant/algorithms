const root = require("../treeFactory");
const result = [];
const breadthFirstValues = (root) => {
    if (!root) return [];
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.shift(); // remove index 0
        const { value, left, right } = current;
        result.push(value);
        if (left) queue.push(left);
        if (right) queue.push(right);
    }
    return result;
}

console.log(breadthFirstValues(root).toString());
// a - c
//           root
//           / \
//          c   b
//           \
//            d
//             \
//              e
//             /
//            f