import React from 'react';
import InputMask from 'react-input-mask';

import baseComponent from '../base-component.jsx';

import './contact-form.scss';

class ContactForm extends baseComponent
{
    constructor(props) {
        super(props);

        this.state = {
        	isButtonsEnabled: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkFormState = this.checkFormState.bind(this);

        this.contactForm = React.createRef()

        this.phoneRegexp = /^\d{3}-\d{2}-\d{2}$/;
    }

    componentDidMount() {

    	this.fields = [...this.contactForm.current.querySelectorAll('[type="text"]')];
    	this.formData = {};

    	this.fields.forEach(el => this.formData[el.name] = el);

    	this.checkFormState();
    }

    checkFormState() {

    	let fieldsNotEmpty = this.fields.every(item => item.value.trim() !== '');

    	let isButtonsEnabled = fieldsNotEmpty & this.phoneRegexp.test(this.formData.phone.value);

    	if (isButtonsEnabled !== this.state.isButtonsEnabled) {
    		this.setState({isButtonsEnabled: isButtonsEnabled});
    	}
    }

    handleSubmit(e) {
    	e.preventDefault();

    	this.emit('onSave', {
    	    lastName: this.formData.lastName.value,
    		firstName: this.formData.firstName.value,
    		secondName: this.formData.secondName.value,
    		phone: this.formData.phone.value
    	});
    }

    render() {
        let {firstName = '', secondName = '', lastName = '', phone = ''} = this.props;

        return (
        	<form className="contact-form" onSubmit={this.handleSubmit} ref={this.contactForm}>
        		<fieldset className="section">
        			<div className="row">
        				<label>First name:</label>

        				<div className="input-wrapper">
        					<input type="text" name="firstName" className="text-input" autoFocus defaultValue={firstName} onChange={this.checkFormState} />
        				</div>
        			</div>

        			<div className="row">
        				<label>Second name:</label>

        				<div className="input-wrapper">
        					<input type="text" name="secondName" className="text-input"  defaultValue={secondName} onChange={this.checkFormState} />
	        			</div>
        			</div>

        			<div className="row">
        				<label>Last name:</label>

        				<div className="input-wrapper">
        					<input type="text" name="lastName" className="text-input"  defaultValue={lastName} onChange={this.checkFormState} />
                    	</div>
        			</div>

        			<div className="row">
        				<label>Phone:</label>

        				<div className="input-wrapper">
        					<InputMask type="text" name="phone" className="text-input" mask="999-99-99" alwaysShowMask onChange={this.checkFormState} defaultValue={phone} />
        				</div>
        			</div>
        		</fieldset>

        		<div className="btn-wrapper">
        			<input className="btn btn-confirm" type='submit' value='Save' disabled={!this.state.isButtonsEnabled} />
        		</div>
    		</form>
    	)
    }
}

export default ContactForm;
