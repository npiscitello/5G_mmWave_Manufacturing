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

class Vertex {
  name;
  category;
  edges = [];

  constructor(category_p, name_p) {
    this.category = category_p;
    this.name = name_p;
  }
}

class Graph {
  graph = {};

  // this takes a vertex object
  addVertex( id, vertex ) {
    if( !this.contains(id) ) {
      this.graph[id] = vertex;
    }
  }

  contains( vertex_id ) {
    return !!this.graph[vertex_id];
  }

  addEdge( vertex1_id, vertex2_id ) {
    if(this.contains(vertex1_id) && this.contains(vertex2_id)) {
      this.graph[vertex1_id].edges.push(vertex2_id);
      this.graph[vertex2_id].edges.push(vertex1_id);
    }
  }
}

function make_graph() {
  graph = {};
  graph.text = "test";
  return graph;
}