/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
	theme: {
		screens: {
			xs: { max: '400px' },
			sm: { max: '520px' },
			md: { max: '768px' },
			lg: { max: '1024px' },
			xl: { max: '1280px' },
		},
		extend: {
			colors: {
				'shopify-black': 'rgb(33, 35, 38)',
			},
			boxShadow: {
				input: 'rgba(107, 113, 119, 0.2) 0px 0px 0px 1px',
				button: '0 0 0.1875em 0.1875em rgb(33 35 38 / 50%)',
			},
		},
	},
	plugins: [],
};
