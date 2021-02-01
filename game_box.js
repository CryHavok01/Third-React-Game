'use strict';

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      let verb = this.props.verb;
      let newMessage = "";
      if (verb === "push") {
        newMessage = "It won't move";    
      } else if (verb === "look") {
        newMessage = "It's a metal box a few inches thick.  It's firmly latched shut.";
      } else if (verb === "pickUp") {
          newMessage = "You can't pick that up";
      } else if (verb === "use") {
          newMessage = "You can't pry it open with your hands";
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
