import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				monumentExt: ['Monument Extended', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
export default config
