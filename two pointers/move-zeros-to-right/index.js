/*
    Move zeros to the lastest positions in array
*/

const moveZerosToLatestPositions = (numbers) => {
    if (!numbers || numbers.length < 2) {
        return;
    }
    let L = 0;
    let R = 1;
    while (R < numbers.length) {
        if (numbers[L] != 0) {
            L++;
            R++;
        } else if (numbers[R] == 0) {
            R++;
        } else { // e.g : 0, 2
            let temp = numbers[R];
            numbers[R] = numbers[L];
            numbers[L] = temp;
        }
    }
}

const numbers = [4, 2, 0, 7, 0, 1, 2, 8, 1, 0];
console.log("numbers " + numbers + "\n");
moveZerosToLatestPositions(numbers);
console.log("numbers " + numbers + "\n");
