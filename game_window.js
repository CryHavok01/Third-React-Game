'use strict';

class Window extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
      if (this.props.room === "start") {
          return(
            <div className="window">
                <Room1 
                    verb={this.props.verb}
                    item={this.props.item}
                    inventory={this.props.inventory}
                    changeMessage={this.props.changeMessage} 
                    changeRoom={this.props.changeRoom}
                    interactions={this.props.interactions}
                    interactStates={this.props.interactStates}
                />
            </div>
        )
    } else if (this.props.room === "room2") {
        return(
            <div className="window">
                <Room2
                    verb={this.props.verb} 
                    item={this.props.item}
                    inventory={this.props.inventory}
                    changeMessage={this.props.changeMessage} 
                    changeRoom={this.props.changeRoom}
                    interactions={this.props.interactions}
                    interactStates={this.props.interactStates}
                />
            </div>
        )
    } else if (this.props.room === "room3") {
        return(
            <div className="window">
                <Room3
                    verb={this.props.verb} 
                    item={this.props.item}
                    room={this.props.room}
                    inventory={this.props.inventory}
                    changeMessage={this.props.changeMessage} 
                    changeRoom={this.props.changeRoom}
                    interactions={this.props.interactions}
                    interactStates={this.props.interactStates}
                />
            </div>
        )
    } else if (this.props.room === "room4") {
        return(
            <div className="window">
                <Room4
                    verb={this.props.verb} 
                    item={this.props.item}
                    room={this.props.room}
                    inventory={this.props.inventory}
                    changeMessage={this.props.changeMessage} 
                    changeRoom={this.props.changeRoom}
                    interactions={this.props.interactions}
                    interactStates={this.props.interactStates}
                />
            </div>
        )
    } else if (this.props.room === "win") {
        return(
            <div className="window">
                <Win reset={this.props.reset} />
            </div>
        )
    }
  }
}
