import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';

import ContactForm from '../contact-form/contact-form.jsx';

function EditContact(props) {

	let selectedContact = props.contacts.find(item => item.id === props.selectedContactID) || {};

	let {id, firstName, secondName, lastName, phone} = selectedContact;

	let updateContact = (contact) => {

		axios
			.patch(props.url + id, {params: contact})

			.then(response => {
				props.updateContact(response.data);
				location.hash = '#';
			})

			.catch(error => {
				props.updateContact({
					id: props.selectedContactID,
					params: contact
				});

				location.hash = '#';
			})
	}

	if (!props.selectedContactID) {
		return <Redirect to="/" />

	} else {
		return (
			<Fragment>
				<h2>Edit contact</h2>

				<ContactForm
					firstName={firstName}
					secondName={secondName}
					lastName={lastName}
					phone={phone}
					onSave={updateContact}
				/>
			</Fragment>
		)
	}
}

function mapStateToProps(state) {
	return {
		url: state.url,
		selectedContactID: state.selectedContactID,
		contacts: state.contacts
	}
}

function mapDispatchToProps(dispatch) {
	return {
		updateContact: function(contact) {
			dispatch({type: 'CONTACT.UPDATE', contact: contact});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);