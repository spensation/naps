import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNap } from '../actions/naps';

class NapFormPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			description: ''
		}
	}

	handleFormOnSubmit(e) {
		console.log('InFormSubmit', this)
		// const napId = this.props.napId;
		this.props.addNap(this.state);
		this.props.history.push('/naps');
	};

	nameHandleOnChange(e) {
		this.setState({
			name: e.target.value
		})
	};

	descriptionHandleOnChange(e) {
		this.setState({
			description: e.target.value
		})
	};

	render() {
		console.log('InNapForm', this)
		return (
			<div className="nap-form">
				<form onSubmit={this.handleFormOnSubmit.bind(this)} >
					<div className="nap-form-name">
						<input 
							placeholder="Nap..."
							ref="name"
							onChange={this.nameHandleOnChange.bind(this)} 
						/>
					</div>

					<div>
						<br></br>
					</div>


					<div className="nap-form-description">
						<input 
							placeholder="Details..."
							ref="description"
							onChange={this.descriptionHandleOnChange.bind(this)} 
						/>
					</div>

					<div>
						<br></br>
					</div>

					<div className="button">
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

const mapStateToProps = (state) => {
	return {
		naps: state.naps
	}
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		addNap: addNap
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NapFormPage);