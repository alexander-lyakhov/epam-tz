import React, {Fragment} from 'react';
import {Route} from 'react-router-dom'

import Calls from '../calls/calls.jsx';

export default function(props) {
    let {id} = props.selectedContact || {};

	return (
		<Fragment>
			<h2>Call history</h2>
			<Route path="/history/:id" component={Calls} />
		</Fragment>
	)
}