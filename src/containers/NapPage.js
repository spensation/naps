import React, { Component } from 'react';
import '../App.css';
import Naps from '../components/Naps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNaps } from '../actions/naps';
import { addNap } from '../actions/naps';

class NapPage extends Component {

  componentDidMount() {
    return this.props.fetchNaps()
  }

  constructor(props) {
    super(props);
    this.state = {
      napText: '',
      naps: [],
    }

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(nap_id) {
    console.log('inOnDelete', this.props.naps.nap_id);
  }
  // updateNapText(napText) {
  //   this.setState({ napText: napText.target.value })
  // }



  // handleKeyPress = (event) => {
  //   if (event.key === "Enter") {

  //   }
  // }

  // handleFormOnSubmit(e) {
  //   console.log('InFormSubmit', this)
  //   // const napId = this.props.napId;
  //   this.props.addNap(this.state);
  //   this.props.history.push('/naps');
  // };

  // nameHandleOnChange(e) {
  //   this.setState({
  //     name: e.target.value
  //   })
  // };

  // descriptionHandleOnChange(e) {
  //   this.setState({
  //     description: e.target.value
  //   })
  // };


  render() {
    console.log('InNapPage', this)
    return (
      <div className="container">
        <div className="header">Track thier naps</div>
        <div>
          <Naps 
            naps={this.props.naps}
            onDelete={this.onDelete}
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
    addNap: addNap
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NapPage);