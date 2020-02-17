// This is a utility to build the adjacency list describing the compatibility
// relationships between blue boxes. We use a nondirected graph to represent 
// our data: each vertex is a blue box (with a property defining its parent red
// box) and each edge represents compatibility between two blue boxes. For
// example, take printing technology A and printing materials 1 and 2. A can
// print in 1 but not in 2. A, 1, and 2 would all be vertices and there would
// be an edge between A and 1 but not between A and 2.

// We could build a JSON file by hand with this info, but that seems difficult
// to manage. For now, we'll build the graph at runtime on the client, but this
// process is scalable - the graph can be pre-built serverside and distributed
// to clients if needed.

// we don't need remove functions b/c users won't be editing the graph
// addNode
// addEdge


function make_graph() {
  let graph = {};
  graph.text = "test";
  return graph;
}
