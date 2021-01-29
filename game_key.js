'use strict';

class Key extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      let verb = this.props.verb;
      let newMessage;
      if (verb === "push") {
        newMessage = "Why do you want to do that?";    
      } else if (verb === "look") {
        newMessage = "It's a key that can fit in a lock.";
      } else if (verb === "pickUp") {
          newMessage = "You grab the key and take it with you";
          let newItem = "Key";
          this.props.interactions.pickUp(newItem);
      } else if (verb === "use") {
          newMessage = "You can't use that";
      }
      this.props.changeMessage(newMessage);
  }
  
  render() {
      return(
        <div>
            <button onClick={this.handleClick}>
                Key
            </button>
        </div>
    )
  }
}
