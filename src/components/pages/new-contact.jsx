import React, {Fragment} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import ContactForm from '../contact-form/contact-form.jsx';

function NewContact(props) {

    let saveContact = (data) => {

    	let contact = Object.assign(
    		{id: Math.floor((Math.random() * new Date().getTime())).toString(16)},
    		data,
    		{history: []}
    	);

    	axios.post(props.url, {params: contact}).then(response => {
    		props.saveContact(contact);
    		location.href="/#";
    	});
    }

	return (
		<Fragment>
			<h2>Create new contact</h2>
			<ContactForm onSave={saveContact}/>
		</Fragment>
	)
}

function mapStateToProps(state) {
	return {
		url: state.url
	}
}

function mapDispatchToProps(dispatch) {
	return {
		saveContact: function(contact) {
			dispatch({type: 'CONTACT.CREATE', data: contact});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewContact);