'use strict';

class Room3 extends React.Component {
  render() {
    if (this.props.interactStates.garageGateOpen) {
      return(
        <div>
          You are in a parking garage.  There are a few parked cars scattered around.  Attached to the wall is an empty metal <Box 
            verb={this.props.verb} 
            item={this.props.item}
            inventory={this.props.inventory}
            changeMessage={this.props.changeMessage}
            interactions={this.props.interactions} 
            interactStates={this.props.interactStates}
          />.  The gate blocking the <GarageExit 
              changeMessage={this.props.changeMessage}
              changeRoom={this.props.changeRoom}
          /> has lifted.  In the corner is a <Stairs 
            room={this.props.room}
            changeMessage={this.props.changeMessage}
            changeRoom={this.props.changeRoom} 
          /> leading up.
        </div>
      )
    } else if (this.props.interactStates.keyBoxOpen && (this.props.inventory.includes("Car Key") || this.props.interactStates.carDoorOpen)) {
      return(
        <div>
          You are in a parking garage.  There are a few parked cars scattered around.  Attached to the wall is an empty metal <Box 
            verb={this.props.verb} 
            item={this.props.item}
            inventory={this.props.inventory}
            changeMessage={this.props.changeMessage}
            interactions={this.props.interactions} 
            interactStates={this.props.interactStates}
          />.  There is a metal <Gate 
            verb={this.props.verb} 
            changeMessage={this.props.changeMessage}
          /> blocking the exit.  Next to the gate is a <CardReader 
            verb={this.props.verb} 
            item={this.props.item}
            changeMessage={this.props.changeMessage}
            interactions={this.props.interactions} 
          />.  In the corner is a <Stairs 
            room={this.props.room}
            changeMessage={this.props.changeMessage}
            changeRoom={this.props.changeRoom} 
          /> leading up.
        </div>
      )
    } else if (this.props.interactStates.keyBoxOpen) {
      return(
        <div>
          You are in a parking garage.  There are a few parked cars scattered around.  Attached to the wall is a metal <Box 
            verb={this.props.verb} 
            item={this.props.item}
            inventory={this.props.inventory}
            changeMessage={this.props.changeMessage}
            interactions={this.props.interactions} 
            interactStates={this.props.interactStates}
          /> with a Hello Kitty <Keychain 
            verb={this.props.verb}
            changeMessage={this.props.changeMessage}
            interactions={this.props.interactions}
          /> inside.  There is a metal <Gate 
            verb={this.props.verb} 
            changeMessage={this.props.changeMessage}
          /> blocking the exit.  Next to the gate is a <CardReader 
            verb={this.props.verb} 
            item={this.props.item}
            changeMessage={this.props.changeMessage}
            interactions={this.props.interactions} 
          />.  In the corner is a <Stairs 
            room={this.props.room}
            changeMessage={this.props.changeMessage}
            changeRoom={this.props.changeRoom} 
          /> leading up.
        </div>
      )
    } else {
      return(
        <div>
          You emerge into a parking garage.  There are a few parked cars scattered around.  Next to you is a closed metal <Box 
            verb={this.props.verb} 
            item={this.props.item}
            inventory={this.props.inventory}
            changeMessage={this.props.changeMessage}
            interactions={this.props.interactions} 
            interactStates={this.props.interactStates}
          /> attached to the wall.  There is a metal <Gate 
            verb={this.props.verb} 
            changeMessage={this.props.changeMessage}
          /> blocking the exit.  Next to the gate is a <CardReader 
            verb={this.props.verb} 
            item={this.props.item}
            changeMessage={this.props.changeMessage}
            interactions={this.props.interactions} 
          />.  In the corner is a <Stairs 
            room={this.props.room}
            changeMessage={this.props.changeMessage}
            changeRoom={this.props.changeRoom} 
          /> leading up.
        </div>
      )
    }
  }
}
