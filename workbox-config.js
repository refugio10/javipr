module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{mp3,m4a,js,css,html,jpg,png,jfif,gif,doc,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};