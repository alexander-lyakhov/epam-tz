import React from 'react';
import {connect} from 'react-redux';

import baseComponent from '../base-component.jsx';

import './contact-list.scss';
import data from './contact-list.json';

class ContactList extends baseComponent {

    constructor(props) {
        super(props);

        this.state = {
            selectedElement: null
        }

        this.toggleSelect = this.toggleSelect.bind(this);
    }

    componentDidMount() {
    	console.log('data:', data);
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
        return (
        	<ul className="user-list">
        		{
        			data.map(contact => {
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
		selectedContact: state.selectedContact
	}
}

function mapDispathToProps(dispatch) {
	return {
		setContact: function(contact) {
			dispatch({type: 'CONTACT.SELECT', data: contact});
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(ContactList);
