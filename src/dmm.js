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
    let v0 = {id : getUUID(), v : new Vertex("test_cat", "v0")};
    let v1 = {id : getUUID(), v : new Vertex("test_cat", "v1")};
    let v2 = {id : getUUID(), v : new Vertex("test_cat", "v2")};
    gobj.addVertex(v0.id, v0.v);
    gobj.addVertex(v1.id, v1.v);
    gobj.addVertex(v2.id, v2.v);
    gobj.addEdge(v0.id, v1.id);
    gobj.addEdge(v0.id, v2.id);
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
