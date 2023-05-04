const numbers = [41, 39, 33, 18, 27, 12];

class MaxBinaryHeap {
    constructor(values) {
        this.values = values;
    }

    insert = (number) => {
        this.values.push(number);
        this.bubbleUp(this.values);
    }

    bubbleUp = (numbers) => {
        let index = numbers.length - 1;
        let element = numbers[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element <= parent) break;
            numbers[parentIndex] = element;
            numbers[index] = parent;
            index = parentIndex;
        }
    }
}

const maxBinaryHeap = new MaxBinaryHeap(numbers);
maxBinaryHeap.insert(55);
console.log(maxBinaryHeap);