/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#FFC4D6",
				secondary: "#C4FFCB",
				darkness: "#804456",
				hover: "#78AD7E"
			},
			fontFamily: {
				'brand': [ "Pacifico" , 'sans-serif'],
			}
		},
	},
	plugins: [],
}
