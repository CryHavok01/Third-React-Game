'use strict';

class IDCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      let verb = this.props.verb;
      let newItem = "ID Card";
      let newMessage = "";
      if (verb === "push") {
        newMessage = "Better not, you don't want to lose it";    
      } else if (verb === "look") {
        newMessage = "It's an ID Card for someone named Russ Linden.  It looks like the card expires next month.";
      } else if (verb === "pickUp") {
          newMessage = "You grab the ID Card off the dashboard";
          this.props.interactions.pickUp(newItem);
      } else if (verb === "use") {
          newMessage = "You can't use that here";
      }
      this.props.changeMessage(newMessage);
  }
  
  render() {
      return(
        <div>
            <button type="button" className="btn btn-secondary" onClick={this.handleClick}>
              ID Card
            </button>
        </div>
    )
  }
}
