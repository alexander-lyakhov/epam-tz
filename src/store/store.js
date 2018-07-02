import {createStore} from 'redux';

let initState = {
    url: 'https://my-json-server.typicode.com/alexander-lyakhov/epam-tz/contacts',
    loaded: false,
    contacts: [],
	selectedContact: null
}

console.log('state', initState)

export default createStore(function(state = initState, action) {
    console.log('state', state, 'action', action)

    if (action.type === 'CONTACTS.POPULATE') {
		return Object.assign({}, state, {contacts: [...action.data], loaded: true});
	}

    if (action.type === 'CONTACT.SELECT') {
    	return Object.assign({}, state, {selectedContact: action.data});
    }

    if (action.type === 'CONTACT.CREATE') {
    	return Object.assign({}, state, {contacts: [action.data, ...state.contacts]});
    }

	return state;
});
