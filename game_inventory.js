'use strict';

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
      const newItem = (e.target.value);
      const verb = this.props.verb;
      let newMessage = '';
      if (verb === 'use') {
        newMessage = 'Use ' + newItem + ' with...';
        this.props.changeMessage(newMessage);
      }
      this.props.changeItem(newItem);
  }
  
    render() {
        return(
            <div className="Inventory">
                {this.props.inventory.map((item, index) => 
                    <button value={item} key={index} onClick={this.handleClick}>
                        {item}
                    </button>)}
            </div>
        )
    }
}
