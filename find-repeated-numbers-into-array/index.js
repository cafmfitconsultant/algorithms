// must be 1 <= and >= n
const inputArray = [6, 4, 3, 5, 2, 5, 7, 2];
const result = [];
for (let i = 0; i < inputArray.length; i++) {
    const value = inputArray[i];
    const memoryIndex = Math.abs(value) - 1;
    if (inputArray[memoryIndex] < 0) {
        result.push(i);
    } else {
        inputArray[memoryIndex] *= -1;
    }
}
console.log(result);