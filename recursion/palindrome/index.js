const isPalindrome = (text) => {

    if (!text || text.length === 1) {
        return true;
    };

    if (text.charAt(0) === text.charAt(text.length - 1)) {
        return isPalindrome(text.substring(1, text.length - 1));
    }
    return false;

}
const text = 'racecar';
console.log(isPalindrome(text));
