import React from 'react';
import Brands from './components/Brands';
import CustomerComment from './components/CustomerComment';
import Features from './components/Features';
import FreeTrail from './components/FreeTrail';
import Header from './components/Header';

const App: React.FC = () => {
	return (
		<React.Fragment>
			<Header />
			<FreeTrail className={'w-[532px]'} />
			<Features />
			<Brands />
			<CustomerComment />
			<FreeTrail className={'w-[632px]'} />
		</React.Fragment>
	);
}

export default App;