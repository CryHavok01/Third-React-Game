'use strict';

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      let verb = this.props.verb;
      let newMessage = "";
      let item = this.props.item;
      let droppedItem = "Crowbar";
      if (this.props.inventory.includes("Car Key")) {
        if (verb === "push") {
          newMessage = "It won't move";    
        } else if (verb === "look") {
          newMessage = "It's a metal box with several hooks to hang keys from.  It is currently empty.";
        } else if (verb === "pickUp") {
            newMessage = "You can't pick that up";
        } else if (verb === "use") {
            newMessage = "It's already open";
        }
      } else if (this.props.interactStates.keyBoxOpen) {
        if (verb === "push") {
          newMessage = "It won't move";    
        } else if (verb === "look") {
          newMessage = "It's a metal box with several hooks to hang keys from.  There is a Hello Kitty keychain hanging from one of the hooks.";
        } else if (verb === "pickUp") {
            newMessage = "You can't pick that up";
        } else if (verb === "use") {
            newMessage = "It's already open";
        }
      } else {
        if (verb === "push") {
          newMessage = "It won't move";    
        } else if (verb === "look") {
          newMessage = "It's a metal box a few inches thick.  It's firmly latched shut.";
        } else if (verb === "pickUp") {
          newMessage = "You can't pick that up";
        } else if (verb === "use" && item === "Crowbar") {
          newMessage = "You jam the crowbar under the edge of the lid and push.  With a snap, the lid flies open revealing several small hooks arranged in rows.  All of the hook are emtpy, except for one which has a Hello Kitty keychain hanging from it."
          this.interactions.keyBoxOpen();
          this.interactions.dropItem(droppedItem);
        } else if (verb === "use") {
          newMessage = "You can't pry it open with your hands";
        }
      }
      this.props.changeMessage(newMessage);
  }
  
  render() {
      return(
        <div>
            <button onClick={this.handleClick}>
              Box
            </button>
        </div>
    )
  }
}
