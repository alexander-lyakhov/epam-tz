import React, {Fragment} from 'react';
import {Provider} from 'react-redux';

import {HashRouter, Switch, Redirect, Route} from 'react-router-dom'

import store from './store/store.js';

import Header from './components/header/header.jsx';
import Main from './components/main/main.jsx';

import Contacts from './components/pages/contacts.jsx';
import NewContact from './components/pages/new-contact.jsx';
import EditContact from './components/pages/edit-contact.jsx';
import History from './components/pages/history.jsx';
import About from './components/pages/about.jsx';

import utils from './utils.js';

window.app = {utils: utils};

export default function() {

	let {browserHistory} = HashRouter;

	return (
		<Provider store={store}>
			<HashRouter history={browserHistory} hashType="noslash">
				<Fragment>
					<Header />
					<Main>
						<Switch>
							<Route exact path="/" component={Contacts} />
							<Route path="/new" component={NewContact} />
							<Route path="/edit" component={EditContact} />
							<Route path="/history/:id" component={History} />
							<Route path="/about" component={About} />
							<Redirect from="*" to="/" />
						</Switch>
					</Main>
				</Fragment>
			</HashRouter>
		</Provider>
	)
}
