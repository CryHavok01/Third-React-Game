'use strict';

class Crate extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      let verb = this.props.verb;
      let newMessage = "";
      if (verb === "push") {
        newMessage = "The crate is too heavy to move, but it doesn't appear to be locked";    
      } else if (verb === "look") {
        newMessage = "It's a big wooden crate with a heavy lid, but you don't see any locks";
      } else if (verb === "pickUp") {
          newMessage = "You can't pick that up";
      } else if (verb === "use") {
          newMessage = "With some effort, you swing the lid open.  Inside the crate are a few shovels, a bag of rock salt, various tools, and one crowbar.";
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
