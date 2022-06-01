import { fireEvent, render, screen } from '@testing-library/react';

import App, { replaceCamelWithSpaces } from './App';

test('should have initial conditions', async () => {
	render(<App />);

	const button = await screen.findByRole('button', { name: /change to Midnight Blue/i });
	expect(button).toBeEnabled();

	const checkbox = await screen.findByRole('checkbox', { name: 'Disable button' });
	expect(checkbox).not.toBeChecked();
});

test('should change button state after check', async () => {
	render(<App />);

	const button = await screen.findByRole('button', { name: /change to Midnight Blue/i });
	const checkbox = await screen.findByRole('checkbox');

	fireEvent.click(checkbox);
	expect(checkbox).toBeChecked();
	expect(button).toBeDisabled();

	fireEvent.click(checkbox);
	expect(checkbox).not.toBeChecked();
	expect(button).toBeEnabled();
});

test('should change button color to gray when disabled', async () => {
	render(<App />);

	const button = await screen.findByRole('button', { name: /change to Midnight Blue/i });
	const checkbox = await screen.findByRole('checkbox');

	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor: 'gray' });

	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

	fireEvent.click(button);
	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor: 'gray' });

	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });
});

test('button has correct initial color', async () => {
	render(<App />);
	const button = await screen.findByRole('button', { name: /change to Midnight Blue/i });

	expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

test('button has correct initial text', async () => {
	render(<App />);
	const button = await screen.findByRole('button', { name: /change to Midnight Blue/i });

	expect(button).toHaveTextContent('Change to Midnight Blue');
});

test('button turns MidnightBlue when clicked and text changed', async () => {
	render(<App />);
	const button = await screen.findByRole('button', { name: /change to Midnight Blue/i });

	fireEvent.click(button);
	expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });
	expect(button).toHaveTextContent('Change to Medium Violet Red');
});

describe('spaces before camel-case capital letters', () => {
	test('should work for no inner capital letters', () => {
		expect(replaceCamelWithSpaces('Red')).toBe('Red');
	});

	test('should work for one inner capital letter', () => {
		expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
	});

	test('should work for multiple inner capital letters', () => {
		expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
	});
});
