import React, {Fragment} from 'react';

export default function() {
	return (
		<Fragment>

			<h2>Task description</h2>

			<div className="section">
				<h3>Develop SPA which should manage contacts. User can work with:</h3>

				<ul className="simple-list">
					<li>list of contacts (better with pagination)</li>
					<li>contact creating (redux-form is allowed but not required)</li>
					<li>contact editing</li>
					<li>contact removing</li>
					<li>history of calls for each contact</li>
					<li>graphql theory</li>
				</ul>
			</div>

			<div className="section">
				Front-end part should be developed as SPA with ES6, React and Redux. Back-end API should be mocked. (json-server)
			</div>

		</Fragment>
	)
}
