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
        this.handleMaskChange = this.handleMaskChange.bind(this);
        this.checkFormState = this.checkFormState.bind(this);

        this.contactForm = React.createRef()
    }

    componentDidMount() {
    	this.fields = this.contactForm.current.querySelectorAll('[type="text"]');

    	this.checkFormState();
    }

    checkFormState() {

    	let isButtonsEnabled = [].every .call(this.fields, item => item.value.trim() !== '');

    	if (isButtonsEnabled !== this.state.isButtonsEnabled) {
    		this.setState({isButtonsEnabled: isButtonsEnabled});
    	}
    }

    handleSubmit(e) {
    	e.preventDefault();
    	console.log('handleSubmit', e.target)

    	let form = e.target;

    	console.log(form.elements)

    	for (var field in form) {
    	    if (form.hasOwnProperty(field)) {
	    		console.log(form[field])
    		}
    	}
    }

    handleMaskChange(e) {
    	console.log(e.target.value)
    }

    render() {
        let {firstName = '', secondName = '', lastName = '', phone = ''} = this.props;

        return (
        	<form className="contact-form" onSubmit={this.handleSubmit} ref={this.contactForm}>
        		<fieldset>
        			<div className="row">
        				<label>First name:</label>

        				<div className="input-wrapper">
        					<input type="text" data-type="text-field" className="text-input" autoFocus defaultValue={firstName} onChange={this.checkFormState} />
        				</div>
        			</div>

        			<div className="row">
        				<label>Second name:</label>

        				<div className="input-wrapper">
        					<input type="text" data-type="text-field" className="text-input"  defaultValue={secondName} onChange={this.checkFormState} />
	        			</div>
        			</div>

        			<div className="row">
        				<label>Last name:</label>

        				<div className="input-wrapper">
        					<input type="text" data-type="text-field" className="text-input"  defaultValue={lastName} onChange={this.checkFormState} />
                    	</div>
        			</div>

        			<div className="row">
        				<label>Phone:</label>

        				<div className="input-wrapper">
        					<InputMask className="text-input" mask="999-99-99" alwaysShowMask onChange={this.handleMaskChange} defaultValue={phone} />
        				</div>
        			</div>
        		</fieldset>

        		<div className="btn-wrapper">
        			<input className="btn btn-confirm" type='submit' value='Save' disabled={!this.state.isButtonsEnabled} />
        			<input className="btn btn-warning" type='reset' value='Reset' />
        		</div>
    		</form>
    	)
    }
}

export default ContactForm;
