/*
    Calculate smallest subarray of given sum
*/
const numbers = [4, 2, 2, 7, 1, 2, 6, 1, 0];
let targetSum = 8; // given sum
let windowStart = 0; // sliding window start point
let currentWindowSum = 0;
let minWindowSize = Number.MAX_VALUE;

for (let windowEnd = 0; windowEnd < numbers.length; windowEnd++) {
    currentWindowSum += numbers[windowEnd];
    while (currentWindowSum >= targetSum) {
        // used for calculate windows size after find some value greater or equal
        // the target sum
        let currentWindowSize = windowEnd - windowStart + 1;
        minWindowSize = Math.min(minWindowSize, currentWindowSize);
        // Once the window is shrinked, we should remove the current
        // start position from the sum
        currentWindowSum -= numbers[windowStart];
        //move foward for window start position
        windowStart++;
    }
}

console.log(minWindowSize);