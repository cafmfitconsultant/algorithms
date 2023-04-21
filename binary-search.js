const numbers = [4, 3, 2, 7, 1, 9, 8, 5].sort();

const binarySearch = (numbers, target) => {
    let i = 0;
    let f = numbers.length - 1;

    while (i < f) {
        let m = Number.parseInt((i + f) / 2);
        if (numbers[m] === target)
            return true;

        if (target > m) {
            i = m + 1;
        } else {
            f = m - 1;
        }
    }
    return false;
}

console.log(binarySearch(numbers, 2));