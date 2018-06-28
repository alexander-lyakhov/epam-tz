import React from 'react';
import {connect} from 'react-redux';

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
            <header>
                <nav>
                	<ul className="menu">
                		<li className="menu__item"><a className="menu__item-link selected" href="#">Contacts</a></li>
                		<li className="menu__item"><a className="menu__item-link" href="#">New</a></li>
                		<li className="menu__item" disabled><a className="menu__item-link" href="#">Edit</a></li>
                		<li className="menu__item" disabled><a className="menu__item-link" href="#">Delete</a></li>
                		<li className="menu__item" disabled><a className="menu__item-link" href="#">History</a></li>
                		<li className="menu__item"><a className="menu__item-link" href="#">About</a></li>
                	</ul>
                </nav>
            </header>
        )
    }
}

export default Header;
