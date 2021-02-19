'use strict';

class Win extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.reset();
  }
  render() {
    return (
      <div>
        You've escaped to freedom!  Congratulations, I hope you learned something from this experience.  I dunno, like, don't get locked in a dungeon?  Or something?  Cool.  Wanna play again? <button
          type="button"
          className="btn btn-secondary"
          onClick={this.handleClick}>Start Over
        </button>
      </div>
    )
  }
}
