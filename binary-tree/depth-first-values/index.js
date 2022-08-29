const root = require('../treeFactory');

const iteraterOverBinaryTree = (root) => {
    if (!root) {
        return
    }
    const result = [];
    const stack = [root];
    while (stack.length > 0) {
        const { value, left, rigth } = stack.pop(); // removes last element
        result.push(value);
        if (left) {
            stack.push(left);
        }
        if (rigth) {
            stack.push(rigth);
        }

    }
    return result;
}

const iteraterRecursivelyOverBinaryTree = (root) => {
    if (!root) {
        return [];
    }
    const { value, left, rigth } = root
    const leftValues = iteraterRecursivelyOverBinaryTree(left);
    const rightValues = iteraterRecursivelyOverBinaryTree(rigth);
    return [value, ...leftValues, ...rightValues];
}

console.log('----------------------------------------');
console.log(iteraterOverBinaryTree(root).toString());
console.log('----------------------------------------');
console.log(iteraterRecursivelyOverBinaryTree(root).toString());