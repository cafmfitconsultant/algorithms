const numbers = [41, 39, 33, 18, 27, 12];

class Item {
    constructor({ value, priority }) {
        this.value = value;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.nodes = [];
    }

    enqueue = ({ value, priority }) => {
        const node = new Item({ value, priority });
        this.nodes.push(node);
        this.bubbleUp();
    }

    bubbleUp = () => {
        let index = this.nodes.length - 1;
        let element = this.nodes[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.nodes[parentIndex];
            if (element.priority <= parent.priority) break;
            this.nodes[parentIndex] = element;
            this.nodes[index] = parent;
            index = parentIndex;
        }
    }

    dequeue = () => {
        const max = this.nodes[0];
        const end = this.nodes.pop();
        if (this.nodes.length > 0) {
            this.nodes[0] = end;
            this.sinkDown();
        }

        return max;
    }

    sinkDown = () => {
        let index = 0;
        const length = this.nodes.length;
        let element = this.nodes[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, righthChild;
            let swapIndex = null;
            if (leftChildIndex < length) {
                leftChild = this.nodes[leftChildIndex];
                if (leftChild.priority > element.priority) {
                    swapIndex = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                righthChild = this.nodes[rightChildIndex];
                if ((swapIndex && righthChild.priority > leftChild.priority)
                    || (!swapIndex && righthChild.priority > element.priority)) {
                    swapIndex = rightChildIndex;
                }
            }
            if (!swapIndex)
                break;

            this.nodes[index] = this.nodes[swapIndex];
            this.nodes[swapIndex] = element;
            index = swapIndex;
        }
    }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue({ value: 'test1', priority: 2 });
priorityQueue.enqueue({ value: 'test2', priority: 4 });
priorityQueue.enqueue({ value: 'test3', priority: 1 });
priorityQueue.enqueue({ value: 'test4', priority: 3 });
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
