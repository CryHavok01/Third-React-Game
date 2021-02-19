'use strict';

class Room2 extends React.Component {

    render() {
        if (this.props.inventory.includes("Key")) {
            return(
                <div>
                    You are in a hallway.  At the end of the hallway is an <Exit_Door 
                        verb={this.props.verb} 
                        inventory={this.props.inventory}
                        item={this.props.item}
                        changeMessage={this.props.changeMessage}
                        changeRoom={this.props.changeRoom}
                        interactions={this.props.interactions} 
                        interactStates={this.props.interactStates}
                    />.
                </div>                
                )
        } else {
            return(
                <div>
                    You are in a hallway.  There is a <Key 
                        verb={this.props.verb}
                        inventory={this.props.inventory}
                        changeMessage={this.props.changeMessage} 
                        interactions={this.props.interactions} 
                        interactStates={this.props.interactStates}
                    /> on the ground.  At the end of the hallway is an <Exit_Door 
                        verb={this.props.verb}
                        item={this.props.item}
                        inventory={this.props.inventory}
                        changeMessage={this.props.changeMessage}
                        changeRoom={this.props.changeRoom}
                        interactions={this.props.interactions} 
                        interactStates={this.props.interactStates}
                    />.
                </div>
            )
        }
      }
  }
