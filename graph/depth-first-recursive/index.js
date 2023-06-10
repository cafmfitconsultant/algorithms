class Graph {
    constructor() {
        // A: [C,D]
        // C: [A,B]
        // B: [C,D]
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1)
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacency = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacency);
        }
        delete this.adjacencyList[vertex];
    }

    depthFirstRecursive(start) {
        const visited = {};
        const result = [];
        const adjacencyList = this.adjacencyList;
        (function dfs
            (vertex) {
            if (!vertex)
                return;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighboor => {
                if (!visited[neighboor]) {
                    return dfs(neighboor);
                }
            });
        })(start);

        return result;
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.depthFirstRecursive('A'));
