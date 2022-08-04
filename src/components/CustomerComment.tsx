import React from 'react';

const CustomerComment: React.FC = () => {
	return (
		<section className={'center-col mt-16 lg:mt-10 lg:w-full'}>
			<img src={'/customer-comment-icon.png'} alt={'Customer Comment'} className={'h-16'} />
			<h2
				className={
					'mt-8 font-helvatica font-medium text-4xl w-[875px] text-center lg:text-3xl lg:w-full lg:px-4'
				}
			>
				&quot;Shopify is better than any other platform we&apos;ve played with, and
				we&apos;ve played with them all.&quot;
			</h2>
			<h3
				className={
					'mt-12 mb-20 font-helvatica font-medium text-2xl text-center lg:px-6 md:mb-16'
				}
			>
				Jonathan Bayme, Ceo of Theory11
			</h3>
		</section>
	);
};

export default CustomerComment;
