import { useState } from 'react';

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
					style={{ backgroundColor: isButtonDisabled ? 'gray' : isPrimaryColor ? 'red' : 'blue' }}
					onClick={handleOnClick}
				>
					{isPrimaryColor ? 'Change to Blue' : 'Change to Red'}
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
