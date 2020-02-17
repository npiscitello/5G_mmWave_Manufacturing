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
  render() {
    let graph = make_graph();
    return e(
      testButton,
      {
        button_text : graph.text,
        alert_text : "You clicked me :)"
      }
    );
  }
}

ReactDOM.render(
  e(matrix),
  document.getElementById("dmm_container")
);
