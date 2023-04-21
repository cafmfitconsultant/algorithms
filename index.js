const letters = [...'beabeefeab'];
let pos1 = 0;
let pos2 = 1;
while (pos2 < letters.length) {
    if (letters[pos1] != letters[pos2]) {
        pos1++;
    } else if (letters[pos1] === letters[pos2]) {
        letters.splice(pos1, 2);
        pos1--;
    }
    pos2 = pos1 + 1;
}
console.log('letters 1---> ', letters);
console.log('letters 2---> ', letters.join("").length);