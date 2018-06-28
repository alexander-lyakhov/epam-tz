import React, {Fragment} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './components/header/header.jsx';
import MainLayout from './components/main-layout/main-layout.jsx';

import HomePage from './pages/home.jsx';
import AboutPage from './pages/about.jsx';

import logo from './assets/react-logo.png';


export default function() {

    let {browserHistory} = BrowserRouter;

    return (
    	<BrowserRouter history={browserHistory}>
        	<div>
        	    <Header />
        		<MainLayout>
        			<Route exact path="/" component={HomePage} />
        			<Route path="/about" component={AboutPage} />
        		</MainLayout>
        	</div>
    	</BrowserRouter>
    )
}
