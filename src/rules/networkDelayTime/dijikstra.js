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

var networkDelayTime = function (times, n, k) {
    let graph = new Graph(n);
    let distance = {};
    let pq = new PriorityQueue();
    for (var i = 1; i <= n; i++) {
        graph.addVertex(i);
        distance[i] = Infinity;
    }
    times.forEach(function (time) {
        graph.addEdge(time[0], time[1], time[2]);
    });
    distance[k] = 0;
    pq.enqueue(k, 0);
    while (!pq.isEmpty()) {
        let minNode = pq.dequeue();
        let currNode = minNode.element;
        let weight = minNode.priority;
        let adjVertexes = graph.AdjList.get(currNode);
        adjVertexes.forEach(function (neigh) {
            let temp = distance[currNode] + neigh.wt;
            if (temp < distance[neigh.node]) {
                distance[neigh.node] = temp;
                pq.enqueue(neigh.node, distance[neigh.node]);
            }
        })
    }
    let time = 0;
    Object.keys(distance).forEach(function (node) {
        if (distance[node] > time) {
            time = distance[node];
        }
    });
    return time == Infinity ? -1 : time;
}

export default networkDelayTime;