import React, {Fragment} from 'react';

import Header from './components/header/header.jsx';
import MainLayout from './components/main-layout/main-layout.jsx';

import logo from './assets/react-logo.png';


export default function() {
    return (
    	<Fragment>
    	    <Header />
    		<MainLayout />
    	</Fragment>
    )
}
