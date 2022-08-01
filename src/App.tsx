import React from 'react';
import Brands from './components/Brands';
import CustomerComment from './components/CustomerComment';
import Faqs from './components/Faqs';
import Features from './components/Features';
import Footer from './components/Footer';
import FreeTrail from './components/FreeTrail';
import Header from './components/Header';

// TODO - Add responsive styling
// TODO - Add meta tags

const App: React.FC = () => {
	return (
		<React.Fragment>
			<Header />
			<FreeTrail className={'w-[532px]'} />
			<Features />
			<Brands />
			<CustomerComment />
			<FreeTrail className={'w-[632px]'} />
			<Faqs />
			<Footer />
		</React.Fragment>
	);
}

export default App;