'use strict';

class GarageExit extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      let newMessage;
      let newRoom = "win";
        newMessage = "You duck under the gate and head out of the garage, seeking your destiny.";
        this.props.changeRoom(newRoom);
        this.props.changeMessage(newMessage);
  }
  
  render() {
      return(
            <button type="button" className="btn btn-secondary" onClick={this.handleClick}>
                Exit
            </button>
      )
  }
}
