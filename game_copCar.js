'use strict';

class CopCar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      let verb = this.props.verb;
      let item = this.props.item;
      let droppedItem = "Car Key";
      let newMessage = "";
      if (this.props.inventory.includes("ID Card") || this.props.interactStates.garageGateOpen) {
        if (verb === "push") {
          newMessage = "You try to push the car into a proper parking spot, but it's too heavy";    
        } else if (verb === "look") {
          newMessage = "The car is still parked illegally, but now it's unlocked.  There isn't anything interesting inside.";
        } else if (verb === "pickUp") {
            newMessage = "You can't pick that up";
        } else if (verb === "use") {
            newMessage = "The car is unlocked, but the engine won't start";
        }
      } else if (this.props.interactStates.carDoorOpen) {
        if (verb === "push") {
          newMessage = "You try to push the car into a proper parking spot, but it's too heavy";    
        } else if (verb === "look") {
          newMessage = "The door is open now, and there is an ID Card on the dashboard";
        } else if (verb === "pickUp") {
            newMessage = "You can't pick that up";
        } else if (verb === "use") {
            newMessage = "The car is unlocked, but the engine won't start";
        }
      } else {
        if (verb === "push") {
          newMessage = "You try to push the car into a proper parking spot, but it's too heavy";    
        } else if (verb === "look") {
          newMessage = "Peering through the windows, you can see an ID Card left on the dashboard";
        } else if (verb === "pickUp") {
          newMessage = "You can't pick that up";
        } else if (verb === "use" && item === "Car Key") {
          newMessage = "The key unlocks the door and you sit in the drivers seat.  You slide the key into the ignition and turn it, but nothing happens.  The car is totally dead";
          this.props.interactions.carDoorOpen();
          this.props.interactions.dropItem(droppedItem);
        } else if (verb === "use") {
          newMessage = "You try the door, but the car is locked";
        }
      }
      this.props.changeMessage(newMessage);
  }
  
  render() {
      return(
            <button onClick={this.handleClick}>
              Cop Car
            </button>
    )
  }
}
