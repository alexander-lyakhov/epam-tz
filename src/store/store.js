import {createStore} from 'redux';

let initState = {
    url: 'https://my-json-server.typicode.com/alexander-lyakhov/epam-tz/contacts',
    contacts: [],
	selectedContact: null
}

console.log('state', initState)

export default createStore(function(state = initState, action) {
    console.log('state', state, 'action', action)

    if (action.type === 'CONTACTS.POPULATE') {
		return Object.assign({}, state, {contacts: [...action.data]});
	}

    if (action.type === 'CONTACT.SELECT') {
    	return Object.assign({}, state, {selectedContact: action.data});
    }

	return state;
});
