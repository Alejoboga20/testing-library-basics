import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';

test('should have initial conditions', async () => {
	render(<App />);

	const button = await screen.findByRole('button', { name: /change to blue/i });
	expect(button).toBeEnabled();

	const checkbox = await screen.findByRole('checkbox', { name: 'Disable button' });
	expect(checkbox).not.toBeChecked();
});

test('should change button state after check', async () => {
	render(<App />);

	const button = await screen.findByRole('button', { name: /change to blue/i });
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

	const button = await screen.findByRole('button', { name: /change to blue/i });
	const checkbox = await screen.findByRole('checkbox');

	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor: 'gray' });

	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor: 'red' });

	fireEvent.click(button);
	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor: 'gray' });

	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor: 'blue' });
});

test('button has correct initial color', async () => {
	render(<App />);
	const button = await screen.findByRole('button', { name: /change to blue/i });

	expect(button).toHaveStyle({ backgroundColor: 'red' });
});

test('button has correct initial text', async () => {
	render(<App />);
	const button = await screen.findByRole('button', { name: /change to blue/i });

	expect(button).toHaveTextContent('Change to Blue');
});

test('button turns blue when clicked and text changed', async () => {
	render(<App />);
	const button = await screen.findByRole('button', { name: /change to blue/i });

	fireEvent.click(button);
	expect(button).toHaveStyle({ backgroundColor: 'blue' });
	expect(button).toHaveTextContent('Change to Red');
});
