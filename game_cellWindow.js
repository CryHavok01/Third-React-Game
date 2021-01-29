'use strict';

class CellWindow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      let verb = this.props.verb;
      let newMessage = "";
      if (verb === "push") {
        newMessage = "The bars won't budge no matter how hard you push";    
      } else if (verb === "look" && this.props.interactStates.buttonRevealed === true) {
        newMessage = "It looks pretty sweet out there";
      } else if (verb === "look") {
        newMessage = "You pull yourself up by the bars and peer out.  You see a far green country under a swift sunrise.  As you clamber down, your foot knocks a piece of brick loose.  Inside the hole is what looks like a button.";
        this.props.interactions.buttonReveal();
      } else if (verb === "pickUp") {
          newMessage = "You can't pick that up";
      } else if (verb === "use") {
          newMessage = "You can't use that";
      }
      this.props.changeMessage(newMessage);
  }
  
  render() {
      return(
            <button onClick={this.handleClick}>
                Window
            </button>
    )
  }
}
