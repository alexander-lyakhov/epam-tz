import React from 'react';
import {connect} from 'react-redux';

import baseComponent from '../base-component.jsx';

import './contact-form.scss';

class ContactForm extends baseComponent
{
    constructor(props) {
        super(props);
    }

    render() {
        let {firstName = '', secondName = '', lastName = '', phone = ''} = this.props;

        return (
        	<form className="contact-form">
        		<fieldset>
        			<div className="row">
        				<label>First name:</label>

        				<div className="input-wrapper">
        					<input type="text" className="text-input" autoFocus defaultValue={firstName} />
        				</div>
        			</div>

        			<div className="row">
        				<label>Second name:</label>

        				<div className="input-wrapper">
        					<input type="text" className="text-input"  defaultValue={secondName} />
	        			</div>
        			</div>

        			<div className="row">
        				<label>Last name:</label>

        				<div className="input-wrapper">
        					<input type="text" className="text-input"  defaultValue={lastName} />
                    	</div>
        			</div>

        			<div className="row">
        				<label>Phone:</label>

        				<div className="input-wrapper">
        					<input type="text" className="text-input" defaultValue={phone} />
        				</div>
        			</div>
        		</fieldset>

        		<div className="btn-wrapper">
        			<input className="btn btn-confirm" type='submit' value='Save' disabled />
        			<input className="btn btn-warning" type='reset' value='Reset' disabled />
        		</div>
    		</form>
    	)
    }
}

export default ContactForm;
