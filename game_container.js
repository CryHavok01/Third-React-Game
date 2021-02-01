'use strict';

const e = React.createElement;

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        verb: null,
        item: null,
        displayMessage: null,
        inventory: [],
        interactStates: {
            buttonRevealed: false,
            buttonPressed: false,
        },
        room: "start"
    };
    
    this.interactions = {
        pickUp: (newItem) => {
            let newInventory = this.state.inventory;
            newInventory.push(newItem);
            this.setState({inventory: newInventory});
        },
        dropItem: (droppedItem) => {
            let oldInventory = this.state.inventory;
            let index = oldInventory.indexOf(droppedItem);
            let newInventory = oldInventory.splice(index, 1);
            this.setState({inventory: newInventory});
        },
        buttonReveal: () => {
            this.setState({interactStates: {...this.state.interactStates, buttonRevealed: true}});
        },
        buttonPress: () => {
            this.setState({interactStates: {...this.state.interactStates, buttonPressed: true}});
        }    
    };
    
    this.changeVerb = this.changeVerb.bind(this);
    this.changeItem = this.changeItem.bind(this);
    this.changeDisplayMessage = this.changeDisplayMessage.bind(this);
    this.interactions.buttonReveal = this.interactions.buttonReveal.bind(this);
    this.interactions.buttonPress = this.interactions.buttonPress.bind(this);
    this.changeRoom = this.changeRoom.bind(this);
    this.reset = this.reset.bind(this);

  }

  changeVerb(newVerb) {
    this.setState({verb: newVerb});
  }

    changeItem(newItem) {
        this.setState({item: newItem});
    }
    
   changeDisplayMessage(newMessage) {
    this.setState({displayMessage: newMessage});
  }
  

  
  changeRoom(newRoom) {
      this.setState({room: newRoom});
  }
  
  reset() {
      this.setState({
          verb: null,
          item: null,
          displayMessage: null,
          interactStates: {
            buttonRevealed: false,
            buttonPressed: false,
          },
          room: "start",
          inventory: []
      })
  }
  render() {
    
    return (
      <div>
        <Window 
            verb={this.state.verb} 
            item={this.state.item}
            room={this.state.room}
            changeMessage={this.changeDisplayMessage}
            changeRoom={this.changeRoom}
            reset={this.reset}
            inventory={this.state.inventory}
            interactions={this.interactions}
            interactStates = {this.state.interactStates}
        />
        <Display message={this.state.displayMessage} />
        <Buttons verb={this.state.verb} onClick={this.changeVerb} />
        <Inventory
          inventory={this.state.inventory} 
          verb={this.state.verb} 
          changeItem={this.changeItem} 
          changeMessage={this.changeDisplayMessage}
        />
        <p>{this.state.verb}</p>
        <p>{this.state.item}</p>
      </div>
    );
  }
}

const domContainer = document.querySelector('#container');
ReactDOM.render(e(Container), domContainer);
