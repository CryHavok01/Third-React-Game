'use strict';

class Bed extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      let verb = this.props.verb;
      let newMessage = "";
      if (verb === "push") {
        newMessage = "The bed creaks but doesn't move much";    
      } else if (verb === "look") {
        newMessage = "It doesn't look comfortable";
      } else if (verb === "pickUp") {
          newMessage = "It's too big to carry";
      }
      this.props.changeMessage(newMessage);
  }
  
  render() {
      return(
        <div className="home_buttons">
            <button onClick={this.handleClick}>
            Bed
            </button>
        </div>
    )
  }
}
