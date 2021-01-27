'use strict';

class Room1 extends React.Component {

  render() {
      if (this.props.interactStates.buttonPressed) {
          return(
              <div>
                You are still inside a small room.  There is one thick metal <Door
                    verb={this.props.verb} 
                    changeMessage={this.props.changeMessage} 
                    changeRoom = {this.props.changeRoom} 
                    interactStates={this.props.interactStates}
                />.  Set high in the wall opposite the door is a small barred <CellWindow 
                    verb={this.props.verb} 
                    changeMessage={this.props.changeMessage} 
                    interactions={this.props.interactions} 
                    interactStates={this.props.interactStates}
                />.  In a hole on the wall beneath the window is a small <CellButton 
                    verb={this.props.verb} 
                    changeMessage={this.props.changeMessage} 
                    interactions={this.props.interactions} 
                    interactStates={this.props.interactStates}
                />.  In the corner is a small cot-style <Bed 
                    verb={this.props.verb} 
                    changeMessage={this.props.changeMessage} 
                />.
              </div>
              )
      } else if (this.props.interactStates.buttonRevealed) {
          return (
            <div>
                You are still inside a small room.  There is one thick metal <Door
                    verb={this.props.verb} 
                    changeMessage={this.props.changeMessage} 
                    changeRoom = {this.props.changeRoom} 
                    interactStates={this.props.interactStates}
                />.  Set high in the wall opposite the door is a small barred <CellWindow 
                    verb={this.props.verb} 
                    changeMessage={this.props.changeMessage} 
                    interactions={this.props.interactions} 
                    interactStates={this.props.interactStates}
                />.  In a hole on the wall beneath the window is a small <CellButton 
                    verb={this.props.verb} 
                    changeMessage={this.props.changeMessage} 
                    interactions={this.props.interactions} 
                    interactStates={this.props.interactStates}
                />.  In the corner is a small cot-style <Bed 
                    verb={this.props.verb} 
                    changeMessage={this.props.changeMessage} 
                    interactStates={this.props.interactStates}
                />.
            </div>            
              )
      } else {
          return(
            <div>
                You wake up inside a small room.  There is one thick metal <Door
                    verb={this.props.verb} 
                    changeMessage={this.props.changeMessage} 
                    changeRoom = {this.props.changeRoom} 
                    interactStates={this.props.interactStates}
                />.  Set high in the wall opposite the door is a small barred <CellWindow 
                    verb={this.props.verb} 
                    changeMessage={this.props.changeMessage} 
                    interactions={this.props.interactions} 
                    interactStates={this.props.interactStates}
                />.  You are lying on a small cot-style <Bed 
                    verb={this.props.verb} 
                    changeMessage={this.props.changeMessage} 
                    interactStates={this.props.interactStates}
                />.
            </div>
        )
      }
  }
}
