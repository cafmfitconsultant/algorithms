const root = require("../../numericTreeFactory");

const treeSum = (root) => {
    if (!root) return 0;
    let totalSum = 0;
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.shift(); // remove index 0
        const { value, left, right } = current;
        totalSum += value;
        if (left) queue.push(left);
        if (right) queue.push(right);
    }
    return totalSum;
}

const treeSumRecursivily = (root) => {
    if (!root) return 0;
    const { value, left, right } = root;
    return value + treeSumRecursivily(left) +
        treeSumRecursivily(right);
}

console.log(`\niterative mode -> ${treeSum(root)}\n`);
console.log(`recursive mode -> ${treeSumRecursivily(root)}\n`);

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