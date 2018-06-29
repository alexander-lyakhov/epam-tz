import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import './header.scss';

function Header(props) {

    let isLinkDisabled = !props.selectedContact;

	return (
        <header className="header">
            <nav>
            	<ul className="menu">
            		<li className="menu__item"><NavLink exact to="/" className="menu__item-link" activeClassName="selected">Contacts</NavLink></li>
            		<li className="menu__item"><NavLink to="/new" className="menu__item-link" activeClassName="selected">New</NavLink></li>
            		<li className="menu__item" disabled={isLinkDisabled}><NavLink to="/edit" className="menu__item-link" activeClassName="selected">Edit</NavLink></li>
            		<li className="menu__item" disabled={isLinkDisabled}><NavLink to="/delete" className="menu__item-link" activeClassName="selected">Delete</NavLink></li>
            		<li className="menu__item" disabled={isLinkDisabled}><NavLink to="/history" className="menu__item-link" activeClassName="selected">History</NavLink></li>
            		<li className="menu__item"><NavLink to="/about" className="menu__item-link" activeClassName="selected">About</NavLink></li>
            	</ul>
            </nav>
        </header>
	)
}

function mapStateToProps(state) {
	return {
		selectedContact: state.selectedContact
	}
}

export default connect(
	mapStateToProps, null, null, {pure: false}
)(Header);
