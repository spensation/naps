import React, { Component } from 'react';

class Nap extends Component {

  render() {
    return (
      <div className="nap" onClick={this.props.deleteMethod}>
        {this.props.text}
      </div>
    );
  }
}

export default Nap;