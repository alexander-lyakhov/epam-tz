import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';

import ContactForm from '../contact-form/contact-form.jsx';

function EditContact(props) {
    let {firstName, secondName, lastName, phone} = props.selectedContact || {};

    console.log('EditContact', props)

	if (!props.selectedContact) {
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
    			/>
    		</Fragment>
		)
	}
}

function mapStateToProps(state) {
	return {
		selectedContact: state.selectedContact
	}
}

export default connect(mapStateToProps)(EditContact);