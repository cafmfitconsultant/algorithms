const reverseString = (text) => {
    if (!text) {
        return "";
    };
    return reverseString(text.slice(1)) + text.charAt(0);
}
const text = 'hello';
console.log(reverseString(text));
