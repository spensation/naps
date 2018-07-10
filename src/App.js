import React, { Component } from 'react';
import './App.css';
import Nap from './components/Nap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      napText: '',
      naps: [],
    }
  }

  updateNapText(napText) {
    this.setState({ napText: napText.target.value })
  }

  addNap() {
    if (this.state.napText === '') {return}

      let napsArr = this.state.naps;
      napsArr.push(this.state.napText);
      this.setState({ napText: '' });
      this.textInput.focus(); 
  }

  handleKeyPress = (event) => {
    if (event.key === "Enter") {

    }
  }

  deleteNote(index) {
    let napsArr = this.state.naps;
    napsArr.splice(index, 1)
    this.setState({ naps: napsArr })
  }

  render() {

    let naps = this.state.naps.map((val, key) => {
      return <Nap key={key} text={val}
            deleteMethod={ () => this.deleteNote(key) } />
    })

    return (
      <div className="container">
        <div className="header">Naps</div>
        {naps}
        <div className="btn" onClick={this.addNap.bind(this)}>+</div>

        <input type="text"
          ref={((input) => {this.textInput = input}) }
          className="textInput"
          value={this.state.napText}
          onChange={napText => this.updateNapText(napText)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
      </div>
    );
  }
}

export default App;
