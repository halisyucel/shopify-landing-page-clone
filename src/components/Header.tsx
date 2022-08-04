import React from 'react';

const Header: React.FC = () => {
	return (
		<header className={'py-8 center-col lg:w-full lg:px-10'}>
			<img src={'/logo.svg'} alt={'Shopify Landing Page'} className={'h-9 my-2 lg:h-8'} />
			<h1
				className={
					'font-helvatica text-shopify-black font-bold text-7xl mt-8 mb-6 text-center w-full md:text-5xl md:mt-2.5'
				}
			>
				Sell online with Shopify
			</h1>
			<p className={'font-helvatica font-normal text-3xl text-center mb-2'}>
				Trusted by millions of businesses worldwide
			</p>
		</header>
	);
};

export default Header;
