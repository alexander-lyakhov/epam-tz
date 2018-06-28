import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import baseComponent from '../base-component.jsx';

import './header.scss';

class Header extends baseComponent
{
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <header className="header">
                <nav>
                	<ul className="menu">
                		<li className="menu__item"><NavLink activeClassName="selected" to="/" className="menu__item-link">Contacts</NavLink></li>
                		<li className="menu__item"><a className="menu__item-link">New</a></li>
                		<li className="menu__item" disabled><a className="menu__item-link">Edit</a></li>
                		<li className="menu__item" disabled><a className="menu__item-link">Delete</a></li>
                		<li className="menu__item" disabled><a className="menu__item-link">History</a></li>
                		<li className="menu__item"><NavLink activeClassName="selected" to="/about" className="menu__item-link" href="#">About</NavLink></li>
                	</ul>
                </nav>
            </header>
        )
    }
}

export default Header;
