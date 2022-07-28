import React from 'react';

const Features: React.FC = () => {
    return (
        <section className={'center-col mt-8 mb-28'}>
            <img 
                src={'/feature-big.svg'}
                alt={'Shopify Features'}
                className={'h-[412px] mb-20'}
            />
            <div className={'flex'}>
                {[
                    {
                        image: '/feature-icon-1.svg',
                        title: 'Customizable templates',
                        description: 'Free website designs to launch your store quickly and easily.'
                    },
                    {
                        image: '/feature-icon-2.svg',
                        title: 'All in one',
                        description: 'Shopify takes care of everything from marketing and payments to secure transactions and shipping.'
                    },
                    {
                        image: '/feature-icon-3.svg',
                        title: 'A safe and efficient platform',
                        description: 'Millions of users trust Shopify to manage their online stores.'
                    }
                ].map(({ image, title, description }, index) => (
                    <div key={index} className={'w-[300px] mr-6 last:mr-0'}>
                        <img 
                            src={image}
                            alt={'Shopify Features'}
                            className={'h-[45px]'}
                        />
                        <h2 className={'font-helvatica font-bold text-lg mt-6'}>
                            {title}
                        </h2>
                        <p className={'font-helvatica font-light text-base mt-2'}>
                            {description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features;