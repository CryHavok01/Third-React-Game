'use strict';

class Exit_Door extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
    handleClick() {
        let verb = this.props.verb;
        let newMessage;
        let newRoom = "room3";
        let item = this.props.item;
        if (verb === "use" && item === "Key") {
            newMessage = "You unlock the door and run to freedom!";
            this.props.interactions.dropItem(item);
            this.props.changeRoom(newRoom);
        } else if (verb === "push") {
            newMessage = "The door is locked";
        } else if (verb === "pickUp"){
            newMessage = "You can't pick that up";
        }
        this.props.changeMessage(newMessage);
  }
  
  render() {
      return(
            <button type="button" className="btn btn-secondary" onClick={this.handleClick}>
                Exit Door
            </button>
    )
  }
}
