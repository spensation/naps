import React, { Component } from 'react';
import '../App.css';
import Nap from '../components/Nap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNaps } from '../actions/naps';
import { addNap } from '../actions/naps';
import { deleteNap } from '../actions/naps';

class NapPage extends Component {

  componentDidMount() {
    return this.props.fetchNaps()
  }

  constructor(props) {
    super(props);
    this.state = {
      naps: [],
    }

  }
  
  deleteNap = (index, e) => {
    const { history, naps } = this.props
    console.log('inDeleteNap', history)
    const napId = naps[index].id;
    deleteNap(napId)  
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
        <div className="nap">
          {
            this.props.naps.map((nap, index) => {
              return(<Nap 
                key={nap.id}
                description={nap.description}
                onDelete={this.deleteNap.bind(this, index)}
                >{nap.name}</Nap>)
            })
          }
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
    addNap: addNap,
    deleteNap: deleteNap
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NapPage);