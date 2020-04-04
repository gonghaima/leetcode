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
  // dfs(v)
}
