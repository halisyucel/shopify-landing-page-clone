import React from 'react';

const Brands: React.FC = () => {
	return (
		<section
			className={
				'center flex-wrap my-8 py-12 border-y-[1px] border-gray-300 lg:w-[calc(100%-4rem)] lg:mx-8 lg:py-4'
			}
		>
			{Array.from({ length: 8 }).map((_, index) => (
				<img
					key={index}
					src={`/brand-${index + 1}.png`}
					alt={`Brand ${index + 1}`}
					className={'w-[90px] mr-8 last:mr-0 lg:w-[110px] lg:!m-4'}
				/>
			))}
		</section>
	);
};

export default Brands;
