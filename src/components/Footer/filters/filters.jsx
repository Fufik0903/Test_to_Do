import React from 'react';
import { NavLink } from 'react-router-dom';

const Filters = () => (
	<ul className="filters">
		<NavLink exact to="/">
			<li>
				<button type="button">
					All
				</button>
			</li>
		</NavLink>
		<NavLink to="/active">
			<li>
				<button type="button">active</button>
			</li>
		</NavLink>
		<NavLink to="/completed">
			<li>
				<button type="button">completed</button>
			</li>
		</NavLink>
	</ul>
);

export default Filters;
