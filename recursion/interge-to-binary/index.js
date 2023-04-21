

const convertToBinary = (value, result) => {
    if (value === 0) {
        return result;
    }
    const next = value % 2 + result;
    return convertToBinary(Number.parseInt(value / 2), next);
}

console.log(convertToBinary(233, ''));
// console.log(1 / 2);