import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';

test('should have initial conditions', async () => {
	render(<App />);

	const button = await screen.findByRole('button', { name: /change to blue/i });
	expect(button).toBeEnabled();

	const checkbox = await screen.findByRole('checkbox');
	expect(checkbox).not.toBeChecked();
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
