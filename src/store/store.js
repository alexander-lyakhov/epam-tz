import {createStore} from 'redux';

let initState = {
	url: 'https://my-json-server.typicode.com/alexander-lyakhov/epam-tz/contacts/',
	loaded: false,
	contacts: [],
	selectedContactID: ''
}

export default createStore(function(state = initState, action) {
	console.log('state', state, 'action', action)

	if (action.type === 'CONTACTS.POPULATE') {
		return Object.assign({}, state, {contacts: [...action.data], loaded: true});
	}

	if (action.type === 'CONTACT.SELECT') {
		return Object.assign({}, state, {selectedContactID: (action.data || {}).id || ''});
	}

	if (action.type === 'CONTACT.CREATE') {
		return Object.assign({}, state, {contacts: [action.data, ...state.contacts]});
	}

	if (action.type === 'CONTACT.UPDATE') {

		return Object.assign ({}, state, {
			contacts: state.contacts.map(item => item.id === action.data.id ? Object.assign(item, action.data.params):item),
			selectedContactID: action.data.id
		});
	}

	if (action.type === 'CONTACT.DELETE') {

		let deleteIndex = state.contacts.findIndex(item => item.id === action.selectedContactID);

		if (deleteIndex < 0) {
			return state;
		}

		state.contacts.splice(deleteIndex, 1);

		return Object.assign ({}, state, {
			selectedContactID: '',
			contacts: state.contacts.map(item => item)
		});
	}

	return state;
});
