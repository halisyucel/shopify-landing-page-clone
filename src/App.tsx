import React from 'react';
import FreeTrail from './components/FreeTrail';
import Header from './components/Header';

const App: React.FC = () => {
	return (
		<React.Fragment>
			<Header />
			<FreeTrail className={'w-[532px]'} />
		</React.Fragment>
	);
}

export default App;