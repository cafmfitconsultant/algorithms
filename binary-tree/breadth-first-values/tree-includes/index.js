const root = require("../../treeFactory");

const treeInclues = (root, target) => {
    if (!root) return false;
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.shift(); // remove index 0
        const { value, left, right } = current;
        if (value === target)
            return true;
        if (left) queue.push(left);
        if (right) queue.push(right);
    }
    return false;
}

const treeIncluesRecursivily = (root, target) => {
    if (!root) return false;
    const { value, left, right } = root;
    if (value === target)
        return true;

    return treeIncluesRecursivily(left, target) ||
        treeIncluesRecursivily(right, target);
}

console.log(`\niterative mode -> ${treeInclues(root, 'c')}\n`);
console.log(`recursive mode -> ${treeIncluesRecursivily(root, 'x')}\n`);

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