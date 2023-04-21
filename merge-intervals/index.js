let intervals = [[5, 9], [2, 6], [1, 3], [10, 15]].sort((arr1, arr2) => arr1[0] - arr2[0]);
const result = [];
let current_interval = intervals[0];
result.push(current_interval);
for (const next of intervals) {
    const current_end = current_interval[1];//8,9
    const next_begin = next[0];
    const next_end = next[1];
    if (current_end >= next_begin) {
        current_interval[1] = Math.max(current_end, next_end);
    } else {
        current_interval = next;
        result.push(current_interval);
    }

}

console.log(result);