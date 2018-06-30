import React from 'react';
import {connect} from 'react-redux';

import './calls.scss';

function Calls(props) {

    let {firstName, secondName, lastName, history} = props.selectedContact;

    return (
    	<div className="history-wrapper">
    		<div className="history-row">
    			{[firstName, secondName, lastName].join(' ')}
    		</div>

			{
				history.map(function(item, index) {
					return (
						<div className="history-row" key={index}>
							<label className="day-shift">{!item.daysago ? 'Today' : item.daysago + ' day(s) ago'}</label>
							<ul className="times">
								{item.times.map(time => <li>{time}</li>)}
							</ul>
						</div>
					)
				})
			}

    	</div>
	)
}

function mapStateToProps(state) {
	return {
		selectedContact: state.selectedContact
	}
}

export default connect(mapStateToProps)(Calls);
