import React from 'react';
import PropTypes from 'prop-types';
import Filters from './filters/filters';

const Footer = (props) => {
	const { itemsLeft, itemsActive } = props;
	return (
		<footer className="footer">
			<span className="todo-count">{itemsLeft} completed items</span>
			<span className="todo-count">{itemsActive} active items</span>
			<Filters />
		</footer>
	);
};
Footer.propTypes = {
	itemsLeft: PropTypes.number.isRequired,
	itemsActive: PropTypes.number.isRequired,
};
export default Footer;
