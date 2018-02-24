const path = require('path');
const ShakePlugin = require('webpack-common-shake').Plugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		main: './index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		publicPath: 'dist/',
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /.css?$/,
				loader: ['style-loader', 'css-loader'],
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new UglifyJsPlugin({
			uglifyOptions: {
				compress: {
					warnings: false,
					conditionals: true,
					unused: true,
					comparisons: true,
					sequences: true,
					dead_code: true,
					evaluate: true,
					join_vars: true,
					if_return: true,
					side_effects: false,
				},
				output: {
					comments: false,
				},
			},
		}),
	],
};
