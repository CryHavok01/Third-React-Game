'use strict';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
      return(
        <p className="display">
          {this.props.message}
        </p>
    )
  }
}
