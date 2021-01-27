'use strict';

class Door extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      let verb = this.props.verb;
      let newMessage;
      let newRoom = "room2";
      if (this.props.interactStates.buttonPressed) {
          if (verb === "push") {
            newMessage = "The door swings wide open.";
            this.props.changeRoom(newRoom);
          } else if (verb === "look") {
            newMessage = "It's a big heavy door, but now it's unlocked.";
          } else if (verb === "pickUp") {
              newMessage = "You can't pick that up";
          }
      } else if (!this.props.interactStates.buttonPressed) {
        if (verb === "push") {
            newMessage = "Damn, that's heavy.";
        } else if (verb === "look") {
            newMessage = "It's a big, heavy, locked door";
        } else if (verb === "pickUp") {
            newMessage = "You can't pick that up";
        }
      }
      this.props.changeMessage(newMessage);
  }
  
  render() {
      return(
            <button onClick={this.handleClick}>
                Door
            </button>
    )
  }
}
