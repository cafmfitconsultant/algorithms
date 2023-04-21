const numbers = [3, 7, 5, 1, 6, 4, 2];
let i = 0;

while (i < numbers.length) {
    let toSort = numbers[i];
    let newSpot = toSort - 1;
    if (toSort != numbers[newSpot]) {
        const swapWith = numbers[newSpot];
        numbers[newSpot] = numbers[i];
        numbers[i] = swapWith;
    } else {
        i++;
    }
}

console.log(numbers);