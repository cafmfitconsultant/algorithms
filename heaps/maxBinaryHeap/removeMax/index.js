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
            numbers[parentIndex] = element;
            numbers[index] = parent;
            index = parentIndex;
        }
    }

    removeMax = () => {
        const max = this.values[0];

        if (this.values.length > 0) {
            this.values[0] = this.values.pop();
            this.sinkDown();
        }

        return max;
    }

    sinkDown = () => {
        let index = 0;
        let element = this.values[0];
        const length = this.values.length;
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, righthChild;
            let swapIndex = null;
            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild > element) {
                    swapIndex = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                righthChild = this.values[rightChildIndex];
                if ((swapIndex && righthChild > leftChild)
                    || (!swapIndex && righthChild > element)) {
                    swapIndex = rightChildIndex;
                }
            }
            if (!swapIndex)
                break;

            this.values[index] = this.values[swapIndex];
            this.values[swapIndex] = element;
            index = swapIndex;
        }
    }
}

const maxBinaryHeap = new MaxBinaryHeap(numbers);
maxBinaryHeap.insert(55);
console.log(maxBinaryHeap.values);
maxBinaryHeap.removeMax();
console.log(maxBinaryHeap.values);
