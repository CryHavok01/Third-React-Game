'use strict';

class CardReader extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      let verb = this.props.verb;
      let newMessage = "";
      let item = this.props.item;
      let droppedItem = "ID Card";
      if (verb === "push") {
        newMessage = "It's cemented to the ground";    
      } else if (verb === "look") {
        newMessage = "It's an electronic card reader, set at car window height next to the exit lane.  A screen reads " + '"Please swipe ID Card to exit."';
      } else if (verb === "pickUp") {
          newMessage = "You can't pick that up";
      } else if (verb === "use" && item === "ID Card") {
        newMessage = "You swipe the ID Card through the scanner.  After a second, the screen lights up green.  With a low grinding sound, the metal gate blocking the exit starts to retract into the ceiling.  After several seconds of slow progress, the gate's motor gives out with a metallic wheeze, and the gate hangs suspended in the air.  Fortunately, it's high enough that you can scramble under it."
        this.props.interactions.garageGateOpen();
        this.props.interactions.dropItem(droppedItem);
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
