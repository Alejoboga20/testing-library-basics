import { useState } from 'react';

const App = () => {
	const [isPrimaryColor, setIsPrimaryColor] = useState(true);

	const handleOnClick = () => setIsPrimaryColor(!isPrimaryColor);

	return (
		<div className='App'>
			<div>
				<button
					style={{ backgroundColor: isPrimaryColor ? 'red' : 'blue' }}
					onClick={handleOnClick}
				>
					{isPrimaryColor ? 'Change to Blue' : 'Change to Red'}
				</button>

				<input type='checkbox' value={!isPrimaryColor} />
			</div>
		</div>
	);
};

export default App;
