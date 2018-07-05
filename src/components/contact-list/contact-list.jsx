import React from 'react';
import {connect} from 'react-redux';

import axios from 'axios';

import './contact-list.scss';

class ContactList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			selectedElement: null
		}

		this.toggleSelect = this.toggleSelect.bind(this);
	}

	componentDidMount() {
		window.axios = axios;

		if (!this.props.loaded) {
			axios
				.get(this.props.url)
				.then(response => this.props.populateContacts(response.data))
	 			.catch(error => this.props.populateContacts([]))
		}
	}

	toggleSelect(contact) {
		return (e) => {

			let {selectedElement} = this.state;
		 	let {selectedContactID} = this.props;

		 	if (e.currentTarget.classList.contains('selected')) {
		 		e.currentTarget.classList.remove('selected');

		 		this.setState({selectedElement: null});
		 		this.props.setContact('');

		 	} else {
		 		selectedElement && selectedElement.classList.remove('selected');
		 		selectedElement = e.currentTarget;
		 		selectedElement.classList.add('selected');

		 		this.setState({selectedElement: selectedElement});
		 		this.props.setContact(contact.id);
		 	}
	 	}
	 }

	render() {
		let {contacts} = this.props;

		if (!this.props.loaded) {
			return <h3 className="section loading">Loading...</h3>

		} else {

			return (
				<ul className="user-list">
					{
						contacts.map(contact => {
							let selectedClassName = this.props.selectedContactID === contact.id ? ' selected':'';

						  	return (
								<li className={"user-list__item" + selectedClassName} key={contact.id} onClick={this.toggleSelect(contact)}>
									<div className="user-info">
										<div className="name">{[contact.lastName, contact.firstName, contact.secondName].join(' ')}</div>
											<div className="phone">{contact.phone}</div>
										</div>
									</li>
					  		)
		  				})
					}
				</ul>
			)
		}
	}
}

function mapStateToProps(state) {
	return {
		loaded: state.loaded,
		contacts: state.contacts,
		selectedContactID: state.selectedContactID,
		url: state.url
	}
}

function mapDispathToProps(dispatch) {
	return {
		setContact: function(selectedContactID) {
			dispatch({type: 'CONTACT.SELECT', selectedContactID: selectedContactID});
		},
		populateContacts: function(contacts) {
			dispatch({type: 'CONTACTS.POPULATE', data: contacts})
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(ContactList);
