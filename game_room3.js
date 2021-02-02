'use strict';

class Room3 extends React.Component {
  render() {
    if (this.props.interactStates.garageGateOpen) {
      return(
        <div>
          You are in a parking garage.  There are a few parked cars scattered around.  The gate blocking the exit has lifted.  In the corner is a stair case leading up.
        </div>
      )
    } else if (this.props.interactStates.keyBoxOpen) {
      return(
        <div>
          You are in a parking garage.  There are a few parked cars scattered around.  Attached to the wall is a metal box with a Hello Kitty keychain inside.  There is a metal gate blocking the exit.  Next to the gate is a card reader.  In the corner is a stair case leading up.
        </div>
      )
    } else {
      return(
        <div>
          You emerge into a parking garage.  There are a few parked cars scattered around.  Next to you is a closed metal box attached to the wall.  There is a metal gate blocking the exit.  Next to the gate is a card reader.  In the corner is a stair case leading up.
        </div>
      )
    }
  }
}
