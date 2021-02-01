'use strict';

class CardReader extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      let verb = this.props.verb;
      let newMessage = "";
      if (verb === "push") {
        newMessage = "It's cemented to the ground";    
      } else if (verb === "look") {
        newMessage = 'It's an electronic card reader, set at car window height next to the exit lane.  A screen reads "Please swipe ID Card to exit."';
      } else if (verb === "pickUp") {
          newMessage = "You can't pick that up";
      } else if (verb === "use") {
          newMessage = "You have nothing to swipe";
      }
      this.props.changeMessage(newMessage);
  }
  
  render() {
      return(
        <div>
            <button onClick={this.handleClick}>
            Card Reader
            </button>
        </div>
    )
  }
}
