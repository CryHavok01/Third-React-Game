'use strict';

class CellButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      let verb = this.props.verb;
      let newMessage = "";
      if (verb === "push" && !this.props.interactStates.buttonPressed) {
        newMessage = "You press the button and hear a heavy 'CLICK' from behind you";
        this.props.interactions.buttonPress();
      } else if (verb === "look") {
        newMessage = "It definitely appears to be a button of some sort.";
      } else if (verb === "push") {
        newMessage = "It's already been pressed in.  It does nothing now.";
      } else if (verb === "pickUp") {
          newMessage = "You can't pick that up.";
      } else if (verb === "use") {
          newMessage = "You can't use that";
      }
      this.props.changeMessage(newMessage);
  }
  
  render() {
      return(
            <button onClick={this.handleClick}>
                Button
            </button>
    )
  }
}
