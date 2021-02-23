'use strict';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
      return(
        <div className="d-flex align-items-center">
            <p>{this.props.message}</p>
        </div>
    )
  }
}
