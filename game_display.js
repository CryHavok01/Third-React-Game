'use strict';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
      return(
        <div className="display">
            <p>{this.props.message}</p>
        </div>
    )
  }
}
