'use strict'

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if( this.state.liked) {
      return 'You like this!';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like 👍'
    );
  }
}

const domContainer = document.querySelector('#react_container');
ReactDOM.render(e(LikeButton), domContainer);
