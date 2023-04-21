/*
    Find a given number sum two pointers in sorted array
*/

const findValueForAGivenNumber = (numbers, target) => {
    if (!numbers || numbers.length < 2) {
        return 0
    }
    let left = 0;
    let rigth = numbers.length - 1;
    while (left < rigth) {
        let sum = numbers[left] + numbers[rigth];
        if (sum < target) {
            left++

        } else if (sum > target) {
            rigth--;
        } else
            if (sum === target) {
                return [left, rigth];
            }
    }
    return [-1, -1];
}

const numbers = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0].sort();
const givenNumber = 15;
console.log('numbers : ', numbers + '\n');
console.log(findValueForAGivenNumber(numbers, givenNumber));
