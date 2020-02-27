// shortcut for creating DOM elements
const e = React.createElement;

function Button( props ) {
  return e(
    "button",
    {
      onClick : props.onClick,
      // there's probably a better way to do this......
      className : props.className,
      id : props.id,
      disabled : props.disabled
    },
    props.button_text
  );
}



// this handles loading and processing of the graph
class GraphManager extends React.Component {
  // build a tree of categories and vertices with IDs
  buildTree( graph ) {
    let tree = {}
    let id_arr = Object.keys(graph);
    for( const id of id_arr ) {
      if( !(!!tree[graph[id].category]) ) {
        tree[graph[id].category] = {};
      }
      tree[graph[id].category][graph[id].name] = id;
    }
    return tree
  }

  renderMatrix( graph, tree ) {
    return e(Matrix, {
      graph : graph,
      tree : tree
    });
  }

  render() {
    let g = buildGraph();
    let t = this.buildTree(g);
    return this.renderMatrix(g, t);
  }
}



class Matrix extends React.Component {
  // lift the button state into the matrix class
  constructor(props) {
    super(props);
    let button_enabled = {};
    let button_selected = {};
    for( const vertex_id in props.graph ) {
      button_enabled[vertex_id] = true;
      button_selected[vertex_id] = false;
    }
    this.state = {
      button_enabled : button_enabled,
      button_selected : button_selected
    };
  };

  handleClick( id ) {
    const state_copy = Object.assign({}, this.state);
    state_copy.button_selected[id] = !state_copy.button_selected[id];
    // enable everything then disable based on selected buttons
    // this is easier than tracking diffs when a button is deselected
    for( const vertex_id in state_copy.button_enabled ) {
      state_copy.button_enabled[vertex_id] = true;
    }
    for( const v1_id in state_copy.button_selected ) {
      if( state_copy.button_selected[v1_id] ) {
        for( const v2_id in this.props.graph[v1_id].edges ) {
          state_copy.button_enabled[v2_id] = false;
        }
      }
    }
    this.setState(state_copy);
  }

  createButtonWithID( vertex_id ) {
    // generate class string
    let className_arr = [];
    let disabled_bool = false;
    if( this.state.button_enabled[vertex_id] ) {
      className_arr.push("enabled");
      disabled_bool = false;
    } else {
      className_arr.push("disabled");
      disabled_bool = true;
    }
    if( this.state.button_selected[vertex_id] ) {
      className_arr.push("selected");
    } else {
      className_arr.push("deselected");
    }
    return e(
      Button,
      {
        id : vertex_id,
        className : className_arr.join(" "),
        button_text : this.props.graph[vertex_id].name,
        onClick : () => this.handleClick(vertex_id),
        key : vertex_id,
        disabled : disabled_bool
      },
    );
  }

  buildRow( category ) {
    let row = [];
    row.push(e("button", {key : category, className : "category", disabled : true}, category));
    for( const element in this.props.tree[category] ) {
      row.push(this.createButtonWithID(this.props.tree[category][element]));
    }
    return e("div", {key : category, className : "row"}, row);
  }

  buildMatrix() {
    let matrix = [];
    for( const category in this.props.tree ) {
      matrix.push(this.buildRow(category));
    }
    return e("div", {key : "matrix", className : "matrix"}, matrix);
  }

  render() {
    return this.buildMatrix()
  }
}



ReactDOM.render(
  e(GraphManager),
  document.getElementById("dmm_container")
);
