import React from 'react';

const Brands: React.FC = () => {
    return (
        <section className={'center my-8 py-12 border-y-[1px] border-gray-300'}>
            {Array.from({ length: 8 }).map((_, index) => (
                <img 
                    key={index}
                    src={`/brand-${index + 1}.png`}
                    alt={`Brand ${index + 1}`}
                    className={'w-[90px] mr-8 last:mr-0'}
                />
            ))}
        </section>
    )
}

export default Brands;