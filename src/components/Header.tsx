import React from 'react';

const Header: React.FC = () => {
    return (
        <header className={'py-8 center-col'}>
            <img 
                src={'/logo.svg'}
                alt={'Shopify Landing Page'}
                className={'h-9 my-2'}
            />
            <h1 className={'shopify-font font-bold text-7xl mt-8 mb-6'}>
                Sell online with Shopify
            </h1>
            <p className={'font-helvatica font-normal text-3xl mb-2'}>
                Trusted by millions of businesses worldwide
            </p>
        </header>
    )
}

export default Header;