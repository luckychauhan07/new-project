/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./views/**/*.ejs", // 👀 This tells Tailwind to watch all .ejs files inside your 'views' folder
		"./src/**/*.js", // You can add paths to JS files too if you use classes there
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
