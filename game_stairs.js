'use strict';

class Stairs extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let newMessage;
    let newRoom;
    if (this.props.room === "room3") {
      let newRoom = "room4";
      let newMessage = "You climb the up stairs";
      this.props.changeRoom(newRoom);
      this.props.changeMessage(newMessage);
    } else if (this.props.room === "room4") {
      let newRoom = "room3";
      let newMessage = "You descend the stairs";
      this.props.changeRoom(newRoom);
      this.props.changeMessage(newMessage);
    }
  }

  render() {
    return (
      <button type="button" className="btn btn-secondary" onClick={this.handleClick}>
        Stair Case
      </button>
    )
  }
}
