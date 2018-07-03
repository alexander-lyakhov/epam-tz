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
		setContact: function(contact) {
			dispatch({type: 'CONTACT.SELECT', data: contact});
		},
		populateContacts: function(contacts) {
			dispatch({type: 'CONTACTS.POPULATE', data: contacts})
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(ContactList);
