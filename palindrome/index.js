/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const nums = String(x).split('').map(Number);
    console.log(nums);
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        if (nums[l] !== nums[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};

console.log(isPalindrome(-121));