import React from 'react';

const CustomerComment: React.FC = () => {
    return (
        <section className={'center-col mt-16'}>
            <img 
                src={'/customer-comment-icon.png'}
                alt={'Customer Comment'}
                className={'h-16'}    
            />
            <h2 className={'mt-8 font-helvatica font-medium text-4xl w-[875px] text-center'}>
                "Shopify is better than any other platform we've played with, and we've played with them all."
            </h2>
            <h3 className={'mt-12 mb-20 font-helvatica font-medium text-2xl'}>
                Jonathan Bayme, Ceo of Theory11
            </h3>
        </section>
    )
}

export default CustomerComment;
