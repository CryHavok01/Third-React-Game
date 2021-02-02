'use strict';

class CopCar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      let verb = this.props.verb;
      let newMessage = "";
      if (verb === "push") {
        newMessage = "You try to push the car into a proper parking spot, but it's too heavy";    
      } else if (verb === "look") {
        newMessage = "Peering through the windows, you can see an ID Card left on the dashboard";
      } else if (verb === "pickUp") {
          newMessage = "You can't pick that up";
      } else if (verb === "use") {
          newMessage = "You try the door, but the car is locked";
      }
      this.props.changeMessage(newMessage);
  }
  
  render() {
      return(
        <div className="home_buttons">
            <button onClick={this.handleClick}>
            Cop Car
            </button>
        </div>
    )
  }
}
