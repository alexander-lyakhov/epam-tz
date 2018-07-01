import React from 'react';
import {connect} from 'react-redux';

import axios from 'axios';

import baseComponent from '../base-component.jsx';

import './contact-list.scss';
//import data from './contact-list.json';

class ContactList extends baseComponent {

    constructor(props) {
        super(props);

        this.state = {
            selectedElement: null
        }

        this.toggleSelect = this.toggleSelect.bind(this);

        this.data = [];
    }

    componentDidMount() {
        this.axios = axios;

        axios({
        	method: 'get',
        	url: 'https://my-json-server.typicode.com/alexander-lyakhov/epam-tz/contacts'
        	//params: {_page: 1, _limit: 3}
        })

        .then(response => {
        	console.log('data ->', response.data);
        	this.props.populateContacts(response.data);
        })

        .catch(error => {
        	console.log('error ->', error)
        	this.props.populateContacts([]);
        })
    }

    toggleSelect(contact) {

    	return (e) => {
    		let {selectedElement} = this.state;

    		selectedElement && selectedElement.classList.remove('selected');

			if (selectedElement !== e.currentTarget) {
				selectedElement = e.currentTarget;
				selectedElement.classList.add('selected');

			} else {
				selectedElement = null;
			}

    		this.setState({selectedElement: selectedElement});

    		this.props.setContact(selectedElement ? contact:null);
    	}
    }

    render() {
        let {contacts} = this.props;

        console.log('ContactList: render');
        console.log('contacts', contacts);

        return (
        	<ul className="user-list">
        		{
        			contacts.map(contact => {
                        let selectedClassName = this.props.selectedContact === contact ? ' selected':'';

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

function mapStateToProps(state) {
	return {
	    contacts: state.contacts,
		selectedContact: state.selectedContact
	}
}

function mapDispathToProps(dispatch) {
	return {
		setContact: function(contact) {
			dispatch({type: 'CONTACT.SELECT', data: contact});
		},
		populateContacts: function(contacts) {
			dispatch({type: 'CONTACTS.POPULATE', data: contacts})
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(ContactList);
