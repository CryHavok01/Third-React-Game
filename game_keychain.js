'use strict';

class Keychain extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      let verb = this.props.verb;
      let newItem = "Car Key";
      let newMessage = "";
      if (verb === "push") {
        newMessage = "The keys jingle on the hook";    
      } else if (verb === "look") {
        newMessage = "A few small house keys and one larger car key hang from the hook.  At the other end of the keychain, Hello Kitty watches you from behind her cold, cruel stare.";
      } else if (verb === "pickUp") {
          newMessage = "You grab the keys off the hook";
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
              Keychain
            </button>
        </div>
    )
  }
}
