const { resolve } = require('path');

const context = resolve(__dirname, 'src');

module.exports = {
	context,

	module: {
		rules: [
			{
				test: /\.jsx?/,
				loader: 'babel-loader',
				options: {
					presets: ['minimal'],
					plugins: [
						['@babel/plugin-proposal-decorators', { legacy: true }],
						['@babel/plugin-proposal-class-properties', { loose: true }]
					]
				},
				include: context
			}
		]
	}
};
