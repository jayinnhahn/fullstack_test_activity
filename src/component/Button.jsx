// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ disabled, onClick, children }) => {
	return (
		<button disabled={disabled} onClick={onClick}>
			{children}
		</button>
	);
};

Button.propTypes = {
	disabled: PropTypes.string.isRequired,
	onClick: PropTypes.string.isRequired,
	children: PropTypes.func.isRequired,
};

export default Button;
