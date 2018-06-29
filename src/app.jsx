import React, {Fragment} from 'react';
import {Provider} from 'react-redux';

import {HashRouter, Switch, Redirect, Route} from 'react-router-dom'

import store from './store/store.js';

import Header from './components/header/header.jsx';
import Main from './components/main/main.jsx';

import Home from './pages/home.jsx';
import NewContact from './pages/new-contact.jsx';
import About from './pages/about.jsx';

import logo from './assets/react-logo.png';


export default function() {

    let {browserHistory} = HashRouter;

    return (
        <Provider store={store}>
        	<HashRouter history={browserHistory}>
            	<Fragment>
            	    <Header />
            		<Main>
            			<Switch>
                			<Route exact path="/" component={Home} />
                			<Route path="/new" component={NewContact} />
                			<Route path="/about" component={About} />
                			<Redirect from="*" to="/" />
            			</Switch>
            		</Main>
            	</Fragment>
        	</HashRouter>
    	</Provider>
    )
}
