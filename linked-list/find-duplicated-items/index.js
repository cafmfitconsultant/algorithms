const numbers = [4, 3, 2, 7, 1, 2, 3, 5];

const findDuplicateNumbersUsingNegativeIndex = (numbers) => {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        let index = Math.abs(numbers[i]);
        let value = numbers[index];
        if (value < 0) {
            result.push(index);
        } else {
            numbers[index] = -numbers[index];
        }
    }
    return result;
}

const findDuplicateNumbersUsingHash = (numbers) => {
    const hash = new Map();
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        let value = numbers[i];
        let keyValue = hash.get(value);

        if (keyValue) {
            keyValue++;
            hash.set(value, keyValue);
        } else {
            hash.set(value, 1);
        }
    }
    hash.forEach((value, key) => {
        if (value > 1) {
            result.push(key);
        }
    });
    return result;
}


console.log(findDuplicateNumbersUsingHash(numbers));
console.log(findDuplicateNumbersUsingNegativeIndex(numbers));
