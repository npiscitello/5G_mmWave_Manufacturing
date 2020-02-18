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
      


var v_ids = [];
class matrix extends React.Component {
  testGraph() {
    let gobj = new Graph;
    let v0 = {id : getUUID(), v : new Vertex("test_cat0", "v0")};
    v_ids.push(v0.id);
    let v1 = {id : getUUID(), v : new Vertex("test_cat0", "v1")};
    v_ids.push(v1.id);
    let v2 = {id : getUUID(), v : new Vertex("test_cat0", "v2")};
    v_ids.push(v2.id);
    let v3 = {id : getUUID(), v : new Vertex("test_cat1", "v3")};
    v_ids.push(v3.id);
    let v4 = {id : getUUID(), v : new Vertex("test_cat1", "v4")};
    v_ids.push(v4.id);
    let v5 = {id : getUUID(), v : new Vertex("test_cat1", "v5")};
    v_ids.push(v5.id);

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

  render() {
    let g = this.testGraph();
    console.log(JSON.stringify(g.graph));
    console.log(g.containsVertex(v_ids[0]))
    console.log(g.containsVertex(5));
    console.log(g.containsEdge(v_ids[0], v_ids[1]));
    console.log(g.containsEdge(v_ids[1], v_ids[2]));
    console.log(g.containsEdge(v_ids[1], 5));
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
