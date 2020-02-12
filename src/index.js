// Left off at https://reactjs.org/tutorial/tutorial.html#declaring-a-winner

const e = React.createElement;

/* we convert this class to a 'function component' because it doesn't contain
 * state or logic, just render instructions
// this is a 'controlled component' - the instance of the Board component has 
// full control over the behavior of the instances of the Square component
class Square extends React.Component {
  render() {
    return e( "button", { 
        className : "square",
        // 'inherit' the onClick function passed in the props (from Board)
        onClick : () => this.props.onClick()
      },
      this.props.value
    );
  }
}
*/

function Square(props) {
  return e("button", {
      className : "square",
      // 'inherit' the onClick function passed in the props (from Board)
      onClick : props.onClick
    },
    props.value
  )
}

class Board extends React.Component {
  // we're lifting state from the squares to the board
  constructor(props) {
    // required for React component constructors (it's a JS class thing)
    super(props);
    // state is an inbuilt feature of React components
    this.state = {
      squares : Array(9).fill(null),
      next_char : "X"
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if( !squares[i] ) {
      squares[i] = this.state.next_char;
      this.setState({
          squares : squares,
          next_char : this.state.next_char === "X" ? "O" : "X"
        }
      );
    }
  }

  renderSquare(i) {
    // this 'passes a prop' to the instance of the Square component
    return e(Square, {
        id : i,
        value : this.state.squares[i],
        onClick : () => this.handleClick(i)
      }
    );
  }

  render() {
    const status = 'Next player: ' + this.state.next_char;

    return e( "div", {},
      e( "div", {className : "status"}, status ),
      e( "div", {className: "board-row"},
        this.renderSquare(0),
        this.renderSquare(1),
        this.renderSquare(2)
      ),
      e( "div", {className: "board-row"},
        this.renderSquare(4),
        this.renderSquare(5),
        this.renderSquare(6)
      ),
      e( "div", {className: "board-row"},
        this.renderSquare(7),
        this.renderSquare(8),
        this.renderSquare(9)
      )
    );
  }
}

class Game extends React.Component {
  render() {
    return e( "div", {className : "game"},
      e( "div", {className : "game-board"},
        e(Board)
      ),
      e( "div", {className : "game-info"},
        e( "div", {}, "status placeholder"),
        e( "ol", {}, "TODO")
      )
    );
  }
}

ReactDOM.render(
  e(Game),
  document.getElementById('react_container')
);
