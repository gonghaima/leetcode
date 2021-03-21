
/*************************************************************************************************************************************************************
 * Runtime: 208 ms, faster than 23.53% of JavaScript online submissions for Find the City With the Smallest Number of Neighbors at a Threshold Distance.     *
 * Memory Usage: 46.3 MB, less than 29.41% of JavaScript online submissions for Find the City With the Smallest Number of Neighbors at a Threshold Distance. *
 *************************************************************************************************************************************************************/

// build graph
// for each node, (dijikstra) calculate the distance to other nodes. Count the number of reachable cities
// loop the node/count pair,find the greatest Node id, with lowest reachable cities count

class QElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }
    enqueue(element, priority) {
        var qElement = new QElement(element, priority);
        var contain = false;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }
        if (!contain) {
            this.items.push(qElement);
        }
    }
    dequeue() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length == 0;
    }
}


class Graph {
    constructor(N) {
        this.num_vertices = N;
        this.AdjList = new Map();
    }
    addVertex(v) {
        this.AdjList.set(v, []);
    }
    addEdge(x, y, wt) {
        this.AdjList.get(x).push({ node: y, wt: wt });
    }
};

var findTheCity = (n, edges, distanceThreshold) => {
    let graph = new Graph(n);

    for (var i = 0; i < n; i++) {
        graph.addVertex(i);
    }
    edges.forEach(function (edge) {
        graph.addEdge(edge[0], edge[1], edge[2]);
        graph.addEdge(edge[1], edge[0], edge[2]);
    });

    const reachable = {};

    for (var i = 0; i < n; i++) {
        let distance = {};
        for (var k = 0; k < n; k++) {
            distance[k] = Infinity;
        }
        distance[i] = 0;
        let pq = new PriorityQueue();
        pq.enqueue(i, 0);

        while (!pq.isEmpty()) {
            let minNode = pq.dequeue();
            let currNode = minNode.element;
            // let weight = minNode.priority;
            let adjVertexes = graph.AdjList.get(currNode);
            adjVertexes.forEach(function (neigh) {
                let temp = distance[currNode] + neigh.wt;
                if (temp < distance[neigh.node]) {
                    distance[neigh.node] = temp;
                    pq.enqueue(neigh.node, distance[neigh.node]);
                }
            })
        };
        let count = 0;
        Object.entries(distance).map(([node, weight]) => {
            weight <= distanceThreshold && count++;
        });
        reachable[i] = count;
    }

    let nodeId = null;
    let numberOfReachableCity = null;
    Object.entries(reachable).forEach(([key, val]) => {
        let k = Number(key);
        if (nodeId === null) {
            nodeId = k;
            numberOfReachableCity = val;
        } else if (val === numberOfReachableCity) {
            nodeId = nodeId > k ? nodeId : k;
        } else if (val < numberOfReachableCity) {
            numberOfReachableCity = val;
            nodeId = k;
        }

    })
    return Number(nodeId);
}

export default findTheCity;