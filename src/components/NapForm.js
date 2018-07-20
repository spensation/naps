
import React, { Component } from 'react';

class NapForm extends Component {

  render() {
		console.log('InNapForm', this)
		return (
			<div className="textInput">
				<form>
					<div className="nap-form-name">
						<input 
							placeholder="Bobby"
							ref="name"
							onChange={this.nameHandleOnChange.bind(this)} 
						/>
					</div>

					<br>

					<div className="nap-form-description">
						<input 
							placeholder="Nap #?"
							ref="description"
							onChange={this.descriptionHandleOnChange.bind(this)} 
						/>
					</div>

					<div className="nap-form-submit">
			            <input
			              type="submit"
			              value="Add Nap" 
			            />
			        </div>
				</form>
			</div>
		)
	}
}

export default NapForm;