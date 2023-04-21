const numbers = [7, 9, 7, 2, 5, 2, 9, 9].sort();
const stack = [];

for (let i = 0; i < numbers.length - 1; i++) {
    const current = numbers[i];
    if (current !== stack.at(-1)) {
        stack.push(current);
    } else {
        stack.pop();
    }
}

console.log(stack);