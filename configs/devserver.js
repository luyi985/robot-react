const webpack= require('webpack');

module.exports = function(options){
	return {
		watchOptions: {
      		// Delay the rebuild after the first change
      		aggregateTimeout: 300,
      		// Poll using interval (in ms, accepts boolean too)
      		poll: 1000
		},
		devServer: {
			historyApiFallback: true,
			hot: true,
			inline:true,
			stats: 'errors-only',
			host: options.host,
			port: options.port
		},
		plugins: [
			// Enable multi-pass compilation for enhanced performance // in larger projects. Good default.
			new webpack.HotModuleReplacementPlugin({
			multiStep: true })
		]
	}
}