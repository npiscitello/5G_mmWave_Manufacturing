// shortcut for creating DOM elements
const e = React.createElement;

function testButton( props ) {
  return e(
    "button", 
    { 
      onClick : () => alert(props.alert_text),
      className : props.className
    },
    props.button_text
  );
}



function Button( props ) {
  return e(
    "button",
    {
      onClick : () => alert(props.alert_text_p),
      className : props.className_p,
      id : props.id_p
    },
    props.button_text_p
  );
}



class row extends React.Component {
}
      


class matrix extends React.Component {
  buildGraph() {
    let gobj = new Graph;
    let v0 = {id : getUUID(), v : new Vertex("test_cat0", "v0")};
    let v1 = {id : getUUID(), v : new Vertex("test_cat0", "v1")};
    let v2 = {id : getUUID(), v : new Vertex("test_cat0", "v2")};
    let v3 = {id : getUUID(), v : new Vertex("test_cat1", "v3")};
    let v4 = {id : getUUID(), v : new Vertex("test_cat1", "v4")};
    let v5 = {id : getUUID(), v : new Vertex("test_cat1", "v5")};

    // a Vertex is a blue box
    gobj.addVertex(v0.id, v0.v);
    gobj.addVertex(v1.id, v1.v);
    gobj.addVertex(v2.id, v2.v);
    gobj.addVertex(v3.id, v3.v);
    gobj.addVertex(v4.id, v4.v);
    gobj.addVertex(v5.id, v5.v);

    // an Edge is an incompatibility
    // <TODO> develop guidelines for edge definition
    gobj.addEdge(v0.id, v1.id);
    gobj.addEdge(v0.id, v2.id);
    gobj.addEdge(v0.id, v5.id);

    gobj.addEdge(v1.id, v0.id);
    gobj.addEdge(v1.id, v3.id);
    gobj.addEdge(v1.id, v5.id);

    gobj.addEdge(v2.id, v0.id);
    gobj.addEdge(v2.id, v3.id);

    gobj.addEdge(v3.id, v5.id);
    return gobj;
  }

  // build a tree of categories and vertices with IDs
  convertGraphToTree( graph ) {
    let tree = {};
    let id_arr = Object.keys(graph);
    for( const id of id_arr ) {
      if( !(!!tree[graph[id].category]) ) {
        tree[graph[id].category] = {};
      }
      tree[graph[id].category][graph[id].name] = id;
    }
    return tree;
  }

  createButtonWithID( graph, vertex_id ) {
    return e(
      Button,
      {
        id_p : vertex_id,
        className_p : "enabled",
        button_text_p : graph[vertex_id].name,
        alert_text_p : "ID: " + vertex_id,
        key : vertex_id
      },
    );
  }

  // the tree defines structure, the graph defines data
  buildRow( tree, category, graph ) {
    let row = [];
    for( const element in tree[category] ) {
      row.push(this.createButtonWithID(graph, 
        tree[category][element]));
    }
    return e("div", {key : category, className : "row"}, row);
  }

  buildMatrix( tree, graph ) {
    let matrix = [];
    for( const category in tree ) {
      matrix.push(this.buildRow(tree, category, graph));
    }
    return e("div", {key : "matrix", className : "matrix"}, matrix);
  }

  render() {
    let g = this.buildGraph().graph;
    let t = this.convertGraphToTree(g);
    return this.buildMatrix(t, g)
  }
}

ReactDOM.render(
  e(matrix),
  document.getElementById("dmm_container")
);
