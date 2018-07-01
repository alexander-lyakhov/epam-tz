import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import './header.scss';

function Header(props) {

    let selectedContact = props.selectedContact || {};
    let isLinkDisabled = !selectedContact.id;

    function clickHandler(e) {
    	e.target.parentNode.hasAttribute('disabled') && e.preventDefault();
    }

	return (
        <header className="header">
            <nav>
            	<ul className="menu">
            		<li className="menu__item">
            			<NavLink exact to="/" className="menu__item-link" activeClassName="selected" onClick={clickHandler}>Contacts</NavLink>
            		</li>

            		<li className="menu__item">
            			<NavLink to="/new" className="menu__item-link" activeClassName="selected" onClick={clickHandler}>New</NavLink>
            		</li>

            		<li className="menu__item" disabled={isLinkDisabled}>
            			<NavLink to="/edit" className="menu__item-link" activeClassName="selected" onClick={clickHandler}>Edit</NavLink>
            		</li>

            		<li className="menu__item" disabled={isLinkDisabled}>
            			<NavLink to="/delete" className="menu__item-link" activeClassName="selected" onClick={clickHandler}>Delete</NavLink>
            		</li>

            		<li className="menu__item" disabled={isLinkDisabled}>
            			<NavLink to={"/history/" + selectedContact.id} className="menu__item-link" activeClassName="selected" onClick={clickHandler}>History</NavLink>
            		</li>

            		<li className="menu__item">
            			<NavLink to="/about" className="menu__item-link" activeClassName="selected" onClick={clickHandler}>About</NavLink>
            		</li>
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
