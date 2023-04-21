const numbers = [7, 9, 7, 2, 5, 2, 9, 9].sort();
const stack = [];

// Considering the last position array as the top of stack

for (let i = 0; i < numbers.length - 1; i++) {
    const current = numbers[i];
    if (current !== stack.at(-1)) { // check at last position
        stack.push(current); // add to last position
    } else {
        stack.pop(); // remove last position
    }
}

console.log(stack);