'use strict';

class Room4 extends React.Component {
  render() {
    if (this.props.interactStates.carDoorOpen && this.props.inventory.includes("ID Card")) {
      return(
        <div>
          You are on the roof of the parking garage.  There is a cop car parked diagonally across three spaces with its door wide open.  Against the far railing is an open tool crate.  The only exit is the <Stairs 
            room={this.props.room}
            changeMessage={this.props.changeMessage}
            changeRoom={this.props.changeRoom} 
          /> leading back down.
        </div>
      )
    } else if (this.props.interactStates.carDoorOpen) {
      return(
        <div>
          You are on the roof of the parking garage.  There is a cop car parked diagonally across three spaces with its door wide open.  On the dashboard of the car is an ID Card.  Against the far railing is an open tool crate.  The only exit is the <Stairs 
            room={this.props.room}
            changeMessage={this.props.changeMessage}
            changeRoom={this.props.changeRoom} 
          /> leading back down.
        </div>
      )
    } else if {this.props.interactStates.toolCrateOpen && this.props.inventory.includes("Crowbar")) {
      return(
        <div>
          You are on the roof of the parking garage.  There is a cop car parked diagonally across three spaces.  Against the far railing is an open tool crate.  The only exit is the <Stairs 
            room={this.props.room}
            changeMessage={this.props.changeMessage}
            changeRoom={this.props.changeRoom} 
          /> leading back down.
        </div>
      )
    } else if {this.props.interactStates.toolCrateOpen) {
      return(
        <div>
          You are on the roof of the parking garage.  There is a cop car parked diagonally across three spaces.  Against the far railing is an open tool crate.  Inside are a variety of tools including a crowbar.  The only exit is the <Stairs 
            room={this.props.room}
            changeMessage={this.props.changeMessage}
            changeRoom={this.props.changeRoom} 
          /> leading back down.
        </div>
      )
    } else {
      return(
        <div>
          You are on the roof of the parking garage.  There is a cop car parked diagonally across three spaces.  Against the far railing is a large wooden <Crate 
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
