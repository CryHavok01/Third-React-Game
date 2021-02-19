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
        keyBoxOpen: false,
        toolCrateOpen: false,
        carDoorOpen: false,
        garageGateOpen: false
      },
      room: "start"
    };

    this.interactions = {
      pickUp: (newItem) => {
        let newInventory = this.state.inventory;
        newInventory.push(newItem);
        this.setState({ inventory: newInventory });
      },
      dropItem: (droppedItem) => {
        let newInventory = this.state.inventory;
        let index = newInventory.indexOf(droppedItem);
        newInventory.splice(index, 1);
        this.setState({ inventory: newInventory });
      },
      buttonReveal: () => {
        this.setState({ interactStates: { ...this.state.interactStates, buttonRevealed: true } });
      },
      buttonPress: () => {
        this.setState({ interactStates: { ...this.state.interactStates, buttonPressed: true } });
      },
      keyBoxOpen: () => {
        this.setState({ interactStates: { ...this.state.interactStates, keyBoxOpen: true } });
      },
      toolCrateOpen: () => {
        this.setState({ interactStates: { ...this.state.interactStates, toolCrateOpen: true } });
      },
      carDoorOpen: () => {
        this.setState({ interactStates: { ...this.state.interactStates, carDoorOpen: true } });
      },
      garageGateOpen: () => {
        this.setState({ interactStates: { ...this.state.interactStates, garageGateOpen: true } });
      },
    };

    this.changeVerb = this.changeVerb.bind(this);
    this.changeItem = this.changeItem.bind(this);
    this.changeDisplayMessage = this.changeDisplayMessage.bind(this);
    this.interactions.buttonReveal = this.interactions.buttonReveal.bind(this);
    this.interactions.buttonPress = this.interactions.buttonPress.bind(this);
    this.interactions.keyBoxOpen = this.interactions.keyBoxOpen.bind(this);
    this.interactions.toolCrateOpen = this.interactions.toolCrateOpen.bind(this);
    this.interactions.carDoorOpen = this.interactions.carDoorOpen.bind(this);
    this.interactions.garageGateOpen = this.interactions.garageGateOpen.bind(this);
    this.changeRoom = this.changeRoom.bind(this);
    this.reset = this.reset.bind(this);

  }

  changeVerb(newVerb) {
    this.setState({ verb: newVerb });
  }

  changeItem(newItem) {
    this.setState({ item: newItem });
  }

  changeDisplayMessage(newMessage) {
    this.setState({ displayMessage: newMessage });
  }



  changeRoom(newRoom) {
    this.setState({ room: newRoom });
  }

  reset() {
    this.setState({
      verb: null,
      item: null,
      displayMessage: null,
      interactStates: {
        buttonRevealed: false,
        buttonPressed: false,
        keyBoxOpen: false,
        toolCrateOpen: false,
        carDoorOpen: false,
        garageGateOpen: false
      },
      room: "start",
      inventory: []
    })
  }
  render() {

    return (
      <div>
        <div className="row" style={{margin: auto}}>
          <div className="col game-window">
            <Window
              verb={this.state.verb}
              item={this.state.item}
              room={this.state.room}
              changeMessage={this.changeDisplayMessage}
              changeRoom={this.changeRoom}
              reset={this.reset}
              inventory={this.state.inventory}
              interactions={this.interactions}
              interactStates={this.state.interactStates}
            />
          </div>
        </div>
        <div className="row" style={{margin: auto}}>
          <div className="col display-box">
            <Display message={this.state.displayMessage} />
          </div>
        </div>
        <div className="row" style={{margin: auto}}>
          <div className="col verbs-box">
            <Buttons verb={this.state.verb} onClick={this.changeVerb} />
          </div>
          <div className="col inv-box">
            <Inventory
              inventory={this.state.inventory}
              verb={this.state.verb}
              changeItem={this.changeItem}
              changeMessage={this.changeDisplayMessage}
            />
          </div>
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#container');
ReactDOM.render(e(Container), domContainer);
