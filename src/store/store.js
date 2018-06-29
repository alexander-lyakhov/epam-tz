import {createStore} from 'redux';

let initState = {
	selectedContact: null
}

console.log('state', initState)

export default createStore(function(state = initState, action) {
    console.log('state', state, 'action', action)

    if (action.type === 'CONTACT.SELECT') {
    	return Object.assign({}, state, {selectedContact: action.data});
    }

	return state;
});
