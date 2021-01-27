'use strict';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
      const newVerb = (e.target.value)
      this.props.onClick(newVerb);
  }
  
  render() {
      return(
        <div className="buttons">
            <button value='push' onClick={this.handleClick}>
                Push
            </button>
            <button value='look' onClick={this.handleClick}>
                Look At
            </button>
            <button value='pickUp' onClick={this.handleClick}>
                Pick Up
            </button>
            <button value='use' onClick={this.handleClick}>
                Use
            </button>
        </div>
    )
  }
}
