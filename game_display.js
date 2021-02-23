'use strict';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
      return(
        <div className="display my-auto">
            <p>{this.props.message}</p>
        </div>
    )
  }
}
