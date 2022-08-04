import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer
			className={
				'w-[1025px] mb-6 flex items-center justify-center text-green-700 font-helvatica font-normal text-[16px] lg:w-full lg:px-8 md:flex-col'
			}
		>
			<a
				href={'https://github.com/halisyucel/shopify-landing-page-clone'}
				target={'_blank'}
				rel={'noopener noreferrer'}
				className={'mr-4 md:mr-0 md:mb-2'}
			>
				View source on Github
			</a>
			<span className={'flex-1 md:hidden'} />
			<a
				href={'https://www.shopify.com/legal/terms'}
				target={'_blank'}
				rel={'noopener noreferrer'}
				className={'mr-4 md:mr-0 md:mb-2'}
			>
				Terms of Service
			</a>
			<a
				href={'https://www.shopify.com/legal/privacy'}
				target={'_blank'}
				rel={'noopener noreferrer'}
			>
				Privacy Policy
			</a>
		</footer>
	);
};

export default Footer;
