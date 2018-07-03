export default {
	uid: function() {
		return Math.floor((Math.random() * new Date().getTime())).toString(16);
	},

	getContact (contacts, id) {
		return contacts.find(item => item.id === id);
	}
};