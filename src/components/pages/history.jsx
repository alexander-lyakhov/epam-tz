import React, {Fragment} from 'react';

import Calls from '../calls/calls.jsx';

export default function(props) {
	return (
		<Fragment>
			<h2>Call history</h2>
			<Calls />
		</Fragment>
	)
}