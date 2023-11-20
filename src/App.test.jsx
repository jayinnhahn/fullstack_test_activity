// eslint-disable-next-line no-unused-vars
import React from 'react';
import { suite, test, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import Button from './component/Button';
import TextInput from './component/TextInput';
import LoginForm from './component/LoginForm';

suite('App', () => {
	test('should render the App', () => {
		const { getByText, getByPlaceholderText } = render(<LoginForm />);
		expect(getByPlaceholderText('Username')).toBeDefined();
		expect(getByPlaceholderText('Password')).toBeDefined();
		expect(getByText('Login')).toBeDefined();
	});

	test('should enable the button if two textboxes were typed', () => {
		const { getByPlaceholderText, getByText } = render(<App />);
		const usernameInput = getByPlaceholderText('Username');
		const passwordInput = getByPlaceholderText('Password');
		const loginButton = getByText('Login');

		fireEvent.change(usernameInput, { target: { value: 'root' } });
		fireEvent.change(passwordInput, { target: { value: 'root' } });

		expect(loginButton).not.toBeDisabled();
	});
});

suite('Button', () => {
	test('should render the button', () => {
		const { getByText } = render(<Button>Test Button</Button>);
		expect(getByText('Test Button')).toBeDefined();
	});

	test('should be clicked', () => {
		// eslint-disable-next-line no-undef
		const handleClick = vi.fn();
		const { getByText } = render(
			<Button onClick={handleClick}>Test Button</Button>
		);
		fireEvent.click(getByText('Test Button'));
		expect(handleClick).toHaveBeenCalled();
	});

	test('should be disabled', () => {
		const { getByText } = render(<Button disabled>Test Button</Button>);
		expect(getByText('Test Button')).toBeDisabled();
	});

	test('should render the text inside the button correctly', () => {
		const { getByText } = render(<Button>Test Button</Button>);
		expect(getByText('Test Button')).toBeDefined();
	});
});

suite('TextInput', () => {
	test('should be rendered', () => {
		const { getByPlaceholderText } = render(
			<TextInput placeholder="Test Input" />
		);
		expect(getByPlaceholderText('Test Input')).toBeDefined();
	});

	test('should be able to type', () => {
		const { getByPlaceholderText } = render(
			<TextInput placeholder="Test Input" />
		);
		const input = getByPlaceholderText('Test Input');
		fireEvent.change(input, { target: { value: 'test' } });
		expect(input.value).toBe('test');
	});

	test('should render the label', () => {
		const { getByPlaceholderText } = render(
			<TextInput placeholder="Test Input" />
		);
		expect(getByPlaceholderText('Test Input')).toBeDefined();
	});
});
