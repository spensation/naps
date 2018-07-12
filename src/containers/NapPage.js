import React, { Component } from 'react';
import '../App.css';
import Naps from '../components/Naps';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNaps } from '../actions/naps';

class NapPage extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     napText: '',
  //     naps: [],
  //   }
  // }

  // updateNapText(napText) {
  //   this.setState({ napText: napText.target.value })
  // }



  // handleKeyPress = (event) => {
  //   if (event.key === "Enter") {

  //   }
  // }


  render() {

    return (
      <div className="container">
        <div className="header">Track thier naps</div>
        <div>
          <Naps 
            naps={this.props.naps}
          />
        </div>


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    naps: state.naps.naps,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchNaps: fetchNaps,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NapPage);