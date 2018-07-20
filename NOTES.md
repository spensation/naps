deleteMethod={ () => this.deleteNap(key) }

const deleteNap = function (index) {
    let napsArr = this.state.naps;
    napsArr.splice(index, 1)
    this.setState({ naps: napsArr })
  }



        move to form:
        
        <div className="btn" onClick={this.addNap.bind(this)}>+</div>
        <input type="text"
          ref={((input) => {this.textInput = input}) }
          className="textInput"
          value={this.state.napText}
          onChange={napText => this.updateNapText(napText)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />


<Route exact path="/new_nap" component={NapForm} />