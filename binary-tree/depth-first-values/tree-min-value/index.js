const root = require("../../numericTreeFactory");

const treeMinValue = (root) => {
    if (!root) return 0;
    let minValue = Infinity;
    const stack = [root];
    while (stack.length > 0) {
        const current = stack.pop(); // remove index 0
        const { value, left, right } = current;
        if (value < minValue) {
            minValue = value;
        }
        if (left) stack.push(left);
        if (right) stack.push(right);
    }
    return minValue;
}

const treeMinValueRecursivily = (root) => {
    if (!root) return Infinity;
    const { value, left, right } = root;
    const leftMin = treeMinValueRecursivily(left);
    const rigthMin = treeMinValueRecursivily(right);
    return Math.min(value, leftMin, rigthMin);
}

console.log(`\niterative mode -> ${treeMinValue(root)}\n`);
console.log(`recursive mode -> ${treeMinValueRecursivily(root)}\n`);

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