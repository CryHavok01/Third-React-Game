'use strict';

class Crowbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      let verb = this.props.verb;
      let newItem = "Crowbar";
      let newMessage;
      if (verb === "push") {
        newMessage = "It rattles around in the crate";    
      } else if (verb === "look") {
        newMessage = "It's a sturdy steel crowbar, perfect for prying things open";
      } else if (verb === "pickUp") {
          newMessage = "You grab the crowbar and take it with you";
          this.props.interactions.pickUp(newItem);
      } else if (verb === "use") {
          newMessage = "You can't use that here";
      }
      this.props.changeMessage(newMessage);
  }
  
  render() {
      return(
        <div>
            <button onClick={this.handleClick}>
              Crowbar
            </button>
        </div>
    )
  }
}
