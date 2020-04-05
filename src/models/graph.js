//ref: https://www.geeksforgeeks.org/implementation-graph-javascript/

export default class Graph {
  // defining vertex array and 
  // adjacent list 
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  // functions to be implemented 

  // addVertex(v) - It adds the vertex v as key to adjList and initialize its values with an array.
  addVertex(v) {
    // initialize the adjacent list with a null array 
    this.AdjList.set(v, []);
  }

  // add edge to the graph - It adds an edge between the src and dest.
  addEdge(v, w) {
    // get the list for vertex v and put the 
    // vertex w denoting edge between v and w 
    this.AdjList.get(v).push(w);

    // Since graph is undirected, 
    // add an edge from w to v also 
    this.AdjList.get(w).push(v);
  }

  // printGraph() 
  // Prints the vertex and adjacency list – It prints vertices and its adjacency list.
  printGraph() {
    let output = "";
    // get all the vertices 
    const get_keys = this.AdjList.keys();

    // iterate over the vertices 
    for (let i of get_keys) {
      // great the corresponding adjacency list 
      // for the vertex 
      const get_values = this.AdjList.get(i);
      const conc = "";

      // iterate over the adjacency list 
      // concatenate the values into a string 
      for (let j of get_values)
        conc += j + " ";

      // print the vertex and its adjacency list 
      console.log(i + " -> " + conc);
      output += `${i} + " -> " + ${conc}`;
    }
    return output;
  }

  // bfs(v) 
  bfs(startingNode) {

    const result = [];

    // create a visited array 
    var visited = [];
    for (var i = 0; i < this.noOfVertices; i++)
      visited[i] = false;

    // Create an object for queue 
    var q = [];

    // add the starting node to the queue 
    visited[startingNode] = true;
    q.push(startingNode);

    // loop until queue is element 
    while (q.length > 0) {
      // get the element from the queue 
      var getQueueElement = q.shift();

      // passing the current vertex to callback funtion 
      console.log(getQueueElement);
      result.push(getQueueElement)

      // get the adjacent list for current vertex 
      var get_List = this.AdjList.get(getQueueElement);

      // loop through the list and add the element to the 
      // queue if it is not processed yet 
      for (var i in get_List) {
        var neigh = get_List[i];

        if (!visited[neigh]) {
          visited[neigh] = true;
          q.push(neigh);
        }
      }
    }
    return result;
  }

  // dfs(v)
}
