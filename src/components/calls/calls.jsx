import React from 'react';
import {connect} from 'react-redux';

import axios from 'axios';

import './calls.scss';

class Calls extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			contact: {}
		}

		this.isLoading = true;
	}

	componentDidMount() {

		let {contacts = [], selectedContactID} = this.props;

		axios
			.get(this.props.url, {params: {id: this.props.match.params.id}})

			.then(response => {
				this.isLoading = false;
   				this.setState({contact: app.utils.getContact(contacts, selectedContactID) || response.data[0] || {}});
			})

			.catch(error => {
				this.isLoading = false;
				this.setState({contact: {}});
			})
	}

	render() {

		let {firstName, secondName, lastName, phone, history = []} = this.state.contact || {};

		if (this.isLoading) {
			return <h3 className="section loading">Loading...</h3>

		} else {

			return (
				<div className="history-wrapper">
					<div className="section history-row">
						{[firstName, secondName, lastName].join(' ')} ( {phone} )
					</div>

					{
						history.map(function(item, index) {
							return (
								<div className="section history-row" key={index}>

									<label className="day-shift">{!item.daysago ? 'Today' : item.daysago + ' day(s) ago'}</label>

									<ul className="times">
										{item.times.map((time, index) => <li key={index}>{time}</li>)}
									</ul>
								</div>
		   					)
	   					})
					}
				</div>
		   	)
		}
	}
}

function mapStateToProps(state) {
	return {
		url: state.url,
		contacts: state.contacts,
		selectedContactID: state.selectedContactID
	}
}

export default connect(mapStateToProps)(Calls);