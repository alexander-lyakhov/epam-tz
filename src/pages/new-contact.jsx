import React, {Fragment} from 'react';

import ContactForm from '../components/contact-form/contact-form.jsx';

export default function() {
	return (
		<Fragment>
			<h2>Create new contact</h2>
			<ContactForm
				firstName="aaa"
				secondName="sss"
				lastName="ddd"
				phone="322-22-33"
			/>
		</Fragment>
	)
}
