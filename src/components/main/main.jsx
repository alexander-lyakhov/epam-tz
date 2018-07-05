import React from 'react';
import './main.scss';

export default function(props) {
	return (
		<div className="main">
			{props.children}
		</div>
	);
}
