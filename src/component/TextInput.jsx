// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ label, value, onChange, placeholder }) => {
	return (
		<div>
			<label>{label}</label>
			<input
				type="text"
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
		</div>
	);
};

TextInput.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.func.isRequired,
};

export default TextInput;
