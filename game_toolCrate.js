'use strict';

class Crate extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      let verb = this.props.verb;
      let newMessage = "";
      if (this.props.inventory.includes("Crowbar")) {
        if (verb === "push") {
          newMessage = "The crate is too heavy to move";    
        } else if (verb === "look") {
          newMessage = "It's an open tool crate.  Inside are shovels, rock salt, and various tools.";
        } else if (verb === "pickUp") {
            newMessage = "You can't pick that up";
        } else if (verb === "use") {
            newMessage = "You don't need to use that anymore";
        }
      } else if (this.props.interactStates.toolCrateOpen) {
        if (verb === "push") {
          newMessage = "The crate is too heavy to move";    
        } else if (verb === "look") {
          newMessage = "It's an open tool crate.  Inside are shovels, rock salt, various tools, and one useful looking crowbar.";
        } else if (verb === "pickUp") {
            newMessage = "You can't pick that up";
        } else if (verb === "use") {
            newMessage = "It's already open";
        }
      } else {
        if (verb === "push") {
          newMessage = "The crate is too heavy to move, but it doesn't appear to be locked";    
        } else if (verb === "look") {
          newMessage = "It's a big wooden crate with a heavy lid, but you don't see any locks";
        } else if (verb === "pickUp") {
            newMessage = "You can't pick that up";
        } else if (verb === "use") {
            newMessage = "With some effort, you swing the lid open.  Inside the crate are a few shovels, a bag of rock salt, various tools, and one crowbar.";
            this.props.interactions.toolCrateOpen();
        }
      this.props.changeMessage(newMessage);
  }
  
  render() {
      return(
        <div>
            <button onClick={this.handleClick}>
              Crate
            </button>
        </div>
      )
  }
}
