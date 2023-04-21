/*
    Calculate max sum of subarray items given specific size K
*/
const numbers = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
const k = 3;
let currentRunningSum = 0;
let maxValue = Number.MIN_VALUE;

for (let i = 0; i < numbers.length - 1; i++) {
    currentRunningSum += numbers[i];
    // When the window is achived, the algorithm starts to calculate
    if (i >= k - 1) {
        maxValue = Math.max(maxValue, currentRunningSum);
        // the calculation is basead in subtract the last position
        // of last window to current
        // sum
        // e.g: after sum 0,1,2 positions, the algorithm subtract position zero and
        // in the next iteration it going to sum the position 3
        currentRunningSum -= currentRunningSum - numbers[i - (k - 1)];
    }
}

console.log(maxValue);