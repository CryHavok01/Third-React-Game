'use strict';

class Gate extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      let verb = this.props.verb;
      let newMessage = "";
      if (verb === "push") {
        newMessage = "You rattle the gate, but it doesn't budge";    
      } else if (verb === "look") {
        newMessage = "It's an automated drop-down gate, fully blocking the exit";
      } else if (verb === "pickUp") {
          newMessage = "Why do you want to carry a whole ass gate?";
      } else if (verb === "use") {
          newMessage = "There's no way you can lift it";
      }
      this.props.changeMessage(newMessage);
  }
  
  render() {
      return(
            <button onClick={this.handleClick}>
             Gate
            </button>
    )
  }
}
