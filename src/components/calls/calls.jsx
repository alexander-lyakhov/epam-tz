import React from 'react';
import {connect} from 'react-redux';

import axios from 'axios';

import './calls.scss';

class Calls extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			contact: {}
		}

		this.isLoading = true;
	}

    componentDidMount() {
        axios.get(
        	this.props.url,
        	{params: {id: this.props.match.params.id}}
        )
        .then(response => {
        	this.isLoading = false;

        	response.data.length ?
	        	this.setState({contact: response.data[0]}):
        		this.setState({contact: {}});
        })
        .catch(error => {
        	this.isLoading = false;
        	this.setState({contact: {}});
        })
    }

    render() {

    	let {firstName, secondName, lastName, history = []} = this.state.contact || {};

    	if (this.isLoading) {
    		return (
        		<div className="section history-row">
        			Loading...
        		</div>
    		)
    	}
    	else {
            return (
            	<div className="history-wrapper">
            		<div className="section history-row">
            			{[firstName, secondName, lastName].join(' ')}
            		</div>

        			{
        				history.map(function(item, index) {
            				return (
        						<div className="section history-row" key={index}>

        							<label className="day-shift">{!item.daysago ? 'Today' : item.daysago + ' day(s) ago'}</label>

        							<ul className="times">
        								{item.times.map((time, index) => <li key={index}>{time}</li>)}
        							</ul>
        						</div>
           					)
       					})
        			}
            	</div>
	       	)
		}
	}
}

function mapStateToProps(state) {
	return {
		selectedContact: state.selectedContact,
		url: state.url
	}
}

export default connect(mapStateToProps)(Calls);