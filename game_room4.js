'use strict';

class Room4 extends React.Component {
  render() {
    if (this.props.interactStates.carDoorOpen && (this.props.inventory.includes("ID Card") || this.props.interactStates.garageGateOpen)) {
      return(
        <div>
          You are on the roof of the parking garage.  There is a <CopCar 
            verb={this.props.verb}
            inventory={this.props.inventory}
            item={this.props.item}
            changeMessage={this.props.changeMessage}
            interactions={this.props.interactions}
            interactStates={this.props.interactStates}
          /> parked diagonally across three spaces with its door wide open.  Against the far railing is an open tool <Crate 
            verb={this.props.verb}
            inventory={this.props.inventory}
            changeMessage={this.props.changeMessage}
            interactions={this.props.interactions}
            interactStates={this.props.interactStates}
          />.  The only exit is the <Stairs 
            room={this.props.room}
            changeMessage={this.props.changeMessage}
            changeRoom={this.props.changeRoom} 
          /> leading back down.
        </div>
      )
    } else if (this.props.interactStates.carDoorOpen) {
      return(
        <div>
          You are on the roof of the parking garage.  There is a <CopCar 
            verb={this.props.verb}
            inventory={this.props.inventory}
            item={this.props.item}
            changeMessage={this.props.changeMessage}
            interactions={this.props.interactions}
            interactStates={this.props.interactStates}
          /> parked diagonally across three spaces with its door wide open.  On the dashboard of the car is an <IDCard 
            verb={this.props.verb}
            changeMessage={this.props.changeMessage}
            interactions={this.props.interactions}
          />.  Against the far railing is an open tool <Crate 
            verb={this.props.verb}
            inventory={this.props.inventory}
            changeMessage={this.props.changeMessage}
            interactions={this.props.interactions}
            interactStates={this.props.interactStates}
          />.  The only exit is the <Stairs 
            room={this.props.room}
            changeMessage={this.props.changeMessage}
            changeRoom={this.props.changeRoom} 
          /> leading back down.
        </div>
      )
    } else if (this.props.interactStates.toolCrateOpen && (this.props.inventory.includes("Crowbar") || this.props.interactStates.keyBoxOpen)) {
      return(
        <div>
          You are on the roof of the parking garage.  There is a <CopCar 
            verb={this.props.verb}
            inventory={this.props.inventory}
            item={this.props.item}
            changeMessage={this.props.changeMessage}
            interactions={this.props.interactions}
            interactStates={this.props.interactStates}
          /> parked diagonally across three spaces.  Against the far railing is an open tool <Crate 
            verb={this.props.verb}
            inventory={this.props.inventory}
            changeMessage={this.props.changeMessage}
            interactions={this.props.interactions}
            interactStates={this.props.interactStates}
          />.  The only exit is the <Stairs 
            room={this.props.room}
            changeMessage={this.props.changeMessage}
            changeRoom={this.props.changeRoom} 
          /> leading back down.
        </div>
      )
    } else if (this.props.interactStates.toolCrateOpen) {
      return(
        <div>
          You are on the roof of the parking garage.  There is a <CopCar 
            verb={this.props.verb}
            inventory={this.props.inventory}
            item={this.props.item}
            changeMessage={this.props.changeMessage}
            interactions={this.props.interactions}
            interactStates={this.props.interactStates}
          /> parked diagonally across three spaces.  Against the far railing is an open tool <Crate 
            verb={this.props.verb}
            inventory={this.props.inventory}
            changeMessage={this.props.changeMessage}
            interactions={this.props.interactions}
            interactStates={this.props.interactStates}
          />.  Inside are a variety of tools including a <Crowbar 
            verb={this.props.verb}
            interactions={this.props.interactions}
            changeMessage={this.props.changeMessage}
          />.  The only exit is the <Stairs 
            room={this.props.room}
            changeMessage={this.props.changeMessage}
            changeRoom={this.props.changeRoom} 
          /> leading back down.
        </div>
      )
    } else {
      return(
        <div>
          You are on the roof of the parking garage.  There is a <CopCar 
            verb={this.props.verb}
            inventory={this.props.inventory}
            item={this.props.item}
            changeMessage={this.props.changeMessage}
            interactions={this.props.interactions}
            interactStates={this.props.interactStates}
          /> parked diagonally across three spaces.  Against the far railing is a large wooden <Crate 
            verb={this.props.verb}
            inventory={this.props.inventory}
            changeMessage={this.props.changeMessage}
            interactions={this.props.interactions}
            interactStates={this.props.interactStates}
          />.  The only exit is the <Stairs 
            room={this.props.room}
            changeMessage={this.props.changeMessage}
            changeRoom={this.props.changeRoom} 
          /> leading back down.
        </div>
      )
    }
  }
}
