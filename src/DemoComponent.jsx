import React from 'react';
import App from '../src/dist'

class DemoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this._onButtonClick}>Button</button>
        {this.state.showComponent ?
           <App shipmentId="c6cf8ad2-fb43-4e75-b3d8-e6b7aaeef8f5"/> :
           null
        }
      </div>
    );
  }
}

export default DemoComponent;