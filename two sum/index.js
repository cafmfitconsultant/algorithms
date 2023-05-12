

const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        const complementaryValue = target - value;
        const valueInHashMap = map[complementaryValue];
        if (valueInHashMap !== undefined) {
            return [valueInHashMap, i]
        } else {
            map[value] = i;
        }
    }
}

// test case
console.log(twoSum([3, 2, 3], 6));
console.log(twoSum([2, 7, 11, 15], 9));