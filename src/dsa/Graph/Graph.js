/**
 * Adjacency List representation
 */
class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices
        this.adjList = new Map()
    }
    addVertex(v) {
        this.adjList.set(v, [])
    }
    addEdge(v1, v2) {
        this.adjList.get(v1).push(v2)
        this.adjList.get(v2).push(v1)
    }
    printGraph() {
        for (const key of this.adjList.keys()) {
            const neighbors = this.adjList.get(key)
            let printedNeighbors = ''
            for (const val of neighbors) {
                printedNeighbors += ` ${val}`
            }
            console.log(`${key} - ${printedNeighbors}`)
        }
    }
    bfs(startingVertex) {
        const visited = {}
        const processQueue = []
        // Add the beginning node to the processing queue
        processQueue.push(startingVertex)
        while (processQueue.length > 0) {
            // Get first in queue
            const vertex = processQueue.shift()
            // Process vertex
            console.log(vertex)
            visited[vertex] = true
            // Add all its neighbors to the queue
            const neighbors = this.adjList.get(vertex)
            for (const n of neighbors) {
                if (visited[n]) continue
                // Add to visited as this may also be a neighbor to other vertices
                visited[n] = true
                processQueue.push(n)
            }
        }
    }
    preorderDFS(startingVertex) {
        const visited = {}
        search(startingVertex, this.adjList)
        function search(vertex, adjacencyList){
            const neighbors = adjacencyList.get(vertex)
            // Process vertex
            console.log(vertex)
            visited[vertex] = true
            console.log(`Processed vertex ${vertex}, visited`, visited)
            for (let i = 0; i < neighbors.length; i++) {
                const neighbor = neighbors[i]
                if (visited[neighbor]) continue
                search(neighbor, adjacencyList);
            }
        }
    }
}
export default Graph