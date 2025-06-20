/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Open sans", "Inter", "sans-serif"],
			},
		},
	},
	plugins: [require("@nauverse/tailwind-dot-grid-backgrounds")],
};
