import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import icons from './icons.jsx';
import './header.scss';

function Header(props) {

    let selectedContactID = props.selectedContactID || '';
    let isLinkDisabled = !selectedContactID;

    function clickHandler(e) {
    	e.target.parentNode.hasAttribute('disabled') && e.preventDefault();
    }

	return (
        <header className="header">
            <nav>
            	<ul className="menu">
            		<li className="menu__item">
            			<NavLink exact to="/" className="menu__item-link" activeClassName="selected" onClick={clickHandler}>
            			    {icons.users}
            				<span>Contacts</span>
            			</NavLink>
            		</li>

            		<li className="menu__item">
            			<NavLink to="/new" className="menu__item-link" activeClassName="selected" onClick={clickHandler}>
            			    {icons.add}
            				<span>New</span>
            			</NavLink>
            		</li>

            		<li className="menu__item" disabled={isLinkDisabled}>
            			<NavLink to="/edit" className="menu__item-link" activeClassName="selected" onClick={clickHandler}>
            			    {icons.edit}
            				<span>Edit</span>
            			</NavLink>
            		</li>

            		<li className="menu__item" disabled={isLinkDisabled}>
            			<NavLink to="/delete" className="menu__item-link" activeClassName="selected" onClick={clickHandler}>
            			    {icons.remove}
            				<span>Delete</span>
            			</NavLink>
            		</li>

            		<li className="menu__item" disabled={isLinkDisabled}>
            			<NavLink to={"/history/" + selectedContactID} className="menu__item-link" activeClassName="selected" onClick={clickHandler}>
            			    {icons.history}
            				<span>History</span>
            			</NavLink>
            		</li>

            		<li className="menu__item">
            			<NavLink to="/about" className="menu__item-link" activeClassName="selected" onClick={clickHandler}>
            			    {icons.about}
            				<span>About</span>
            			</NavLink>
            		</li>
            	</ul>
            </nav>
        </header>
	)
}

function mapStateToProps(state) {
	return {
		selectedContactID: state.selectedContactID
	}
}

export default connect(
	mapStateToProps, null, null, {pure: false}
)(Header);
