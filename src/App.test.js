import { render, screen } from '@testing-library/react';

import App from './App';

test('button has correct initial color', async () => {
	render(<App />);

	const button = await screen.findByRole('button', { name: /change to blue/i });
	expect(button).toHaveStyle({ backgroundColor: 'red' });
});

test('button has correct initial text', () => {});

test('button turns blue when clicked', () => {});
