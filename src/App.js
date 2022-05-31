import { useState } from 'react';

const App = () => {
	const [isPrimaryColor, setIsPrimaryColor] = useState(true);
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);

	const handleOnClick = () => setIsPrimaryColor(!isPrimaryColor);
	const handleOnCheck = () => setIsButtonDisabled(!isButtonDisabled);

	return (
		<div className='App'>
			<div>
				<button
					disabled={isButtonDisabled}
					style={{ backgroundColor: isPrimaryColor ? 'red' : 'blue' }}
					onClick={handleOnClick}
				>
					{isPrimaryColor ? 'Change to Blue' : 'Change to Red'}
				</button>

				<input type='checkbox' value={isButtonDisabled} onChange={handleOnCheck} />
			</div>
		</div>
	);
};

export default App;
