import React from 'react';
import {connect} from 'react-redux';
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

    	this.arrFields = [...this.contactForm.current.querySelectorAll('[type="text"]')];
    	this.mapFields = {};

    	this.arrFields.forEach(el => this.mapFields[el.name] = el);

    	this.checkFormState();
    }

    checkFormState() {

    	let fieldsNotEmpty = this.arrFields.every(item => item.value.trim() !== '');

    	let isButtonsEnabled = fieldsNotEmpty & this.phoneRegexp.test(this.mapFields.phone.value);

    	if (isButtonsEnabled !== this.state.isButtonsEnabled) {
    		this.setState({isButtonsEnabled: isButtonsEnabled});
    	}
    }

    handleSubmit(e) {
    	e.preventDefault();

    	console.log('handleSubmit', e.target)

    	let form = e.target;

    	console.log(form.elements)
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
