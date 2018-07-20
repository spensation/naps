import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNaps } from './actions/naps';
import './App.css';
import NapPage from './containers/NapPage';
import NapFormPage from './containers/NapFormPage';
import NavBar from './components/NavBar';
import Main from './components/Main';


import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {

  
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

  // addNap() {
  //   if (this.state.napText === '') {return}

  //     let napsArr = this.state.naps;
  //     napsArr.push(this.state.napText);
  //     this.setState({ napText: '' });
  //     this.textInput.focus(); 
  // }

  // handleKeyPress = (event) => {
  //   if (event.key === "Enter") {

  //   }
  // }

  // deleteNote(index) {
  //   let napsArr = this.state.naps;
  //   napsArr.splice(index, 1)
  //   this.setState({ naps: napsArr })
  // }

  render() {

    // let naps = this.state.naps.map((val, key) => {
    //   return <Nap key={key} text={val}
    //         deleteMethod={ () => this.deleteNote(key) } />
    // })

    return (
      <Router>
        <div>
          
          <NavBar />
          <Route exact path="/" component={Main} />
          <Route exact path="/new_nap" component={NapFormPage} />
          <Route exact path="/naps" component={NapPage} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    naps: state.naps,
     };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchNaps: fetchNaps
  }, dispatch);
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
