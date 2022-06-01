import { useState } from 'react';

export const replaceCamelWithSpaces = (colorName) => {
	return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

const App = () => {
	const [isPrimaryColor, setIsPrimaryColor] = useState(true);
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);

	const handleOnClick = () => setIsPrimaryColor(!isPrimaryColor);

	const handleOnCheck = (e) => setIsButtonDisabled(e.target.checked);

	return (
		<div className='App'>
			<div>
				<button
					disabled={isButtonDisabled}
					style={{
						backgroundColor: isButtonDisabled
							? 'gray'
							: isPrimaryColor
							? 'MediumVioletRed'
							: 'MidnightBlue',
						color: 'white',
					}}
					onClick={handleOnClick}
				>
					{isPrimaryColor
						? `Change to ${replaceCamelWithSpaces('MidnightBlue')}`
						: `Change to ${replaceCamelWithSpaces('MediumVioletRed')}`}
				</button>

				<input
					id='disable-button-checkbox'
					type='checkbox'
					value={isButtonDisabled}
					onChange={handleOnCheck}
				/>
				<label htmlFor='disable-button-checkbox'>Disable button</label>
			</div>
		</div>
	);
};

export default App;
