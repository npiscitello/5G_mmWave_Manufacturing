// shortcut for creating DOM elements
const e = React.createElement;

function testButton( props ) {
  return e(
    "button", 
    { onClick : () => alert(props.alert_text) },
    props.button_text
  );
}



class row extends React.Component {
}
      

class matrix extends React.Component {
  testGraph() {
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
    return gobj.graph;
  }

  render() {
    console.log(JSON.stringify(this.testGraph()));
    return e(
      testButton,
      {
        button_text : "click me",
        alert_text : "You clicked me :)"
      }
    );
  }
}

ReactDOM.render(
  e(matrix),
  document.getElementById("dmm_container")
);
