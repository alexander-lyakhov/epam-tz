import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import swal from 'sweetalert2';
import axios from 'axios';

import icons from './icons.jsx';
import './header.scss';

class Header extends React.Component {

	constructor(props) {
		super(props);

		this.clickHandler = this.clickHandler.bind(this);
		this.deleteHandler = this.deleteHandler.bind(this);
	}

	clickHandler(e) {
		e.currentTarget.parentNode.hasAttribute('disabled') && e.preventDefault();
	}

	deleteHandler(e) {

		e.preventDefault();

		if (e.currentTarget.parentNode.hasAttribute('disabled')) {
			return;
		}

		let {selectedContactID, deleteContact} = this.props;

		swal({
			type: 'question',
			text: 'Delete selected contact?',
			showCancelButton: true,
			cancelButtonColor: '#d33',
			showLoaderOnConfirm: true,

			preConfirm: () => {
				return axios
					.delete(this.props.url + selectedContactID)

					.then(response => {
						deleteContact(selectedContactID)
						location.hash = '#';
					})

					.catch(error => {
						deleteContact(selectedContactID)
						location.hash = '#';
					})
			}
		})
	}

	render() {

		let {selectedContactID} = this.props;
		let isLinkDisabled = !selectedContactID;

		return (
			<header className="header">
				<nav>
					<ul className="menu">
						<li className="menu__item">
							<NavLink exact to="/" className="menu__item-link" activeClassName="selected" onClick={this.clickHandler}>
								{icons.users}
								<span>Contacts</span>
							</NavLink>
						</li>

						<li className="menu__item">
							<NavLink to="/new" className="menu__item-link" activeClassName="selected" onClick={this.clickHandler}>
								{icons.add}
								<span>New</span>
							</NavLink>
						</li>

						<li className="menu__item" disabled={isLinkDisabled}>
							<NavLink to="/edit" className="menu__item-link" activeClassName="selected" onClick={this.clickHandler}>
								{icons.edit}
								<span>Edit</span>
							</NavLink>
						</li>

						<li className="menu__item" disabled={isLinkDisabled}>
							<a href="#" className="menu__item-link menu__item-link-delete" onClick={this.deleteHandler}>
								{icons.remove}
								<span>Delete</span>
							</a>
						</li>

						<li className="menu__item" disabled={isLinkDisabled}>
							<NavLink to={"/history/" + selectedContactID} className="menu__item-link" activeClassName="selected" onClick={this.clickHandler}>
								{icons.history}
								<span>History</span>
							</NavLink>
						</li>

						<li className="menu__item">
							<NavLink to="/about" className="menu__item-link" activeClassName="selected" onClick={this.clickHandler}>
								{icons.about}
								<span>About</span>
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		)
	}
}

function mapStateToProps(state) {
	return {
		url: state.url,
		selectedContactID: state.selectedContactID
	}
}

function mapDispatchToProps(dispatch) {
	return {
		deleteContact: function(selectedContactID) {
			dispatch({type: 'CONTACT.DELETE', selectedContactID: selectedContactID});
		}
	}
}

export default connect(
	mapStateToProps, mapDispatchToProps, null, {pure: false}
)(Header);
