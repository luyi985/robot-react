const webpack= require('webpack');

module.exports = function(options) {
	const entry = {};
	entry[options.name] = options.entries;
	return {
		// Define an entry point needed for splitting.
		entry: entry,
		plugins: [
			// Extract bundle and manifest files. Manifest is
			// needed for reliable caching.
			new webpack.optimize.CommonsChunkPlugin({
			  names: [options.name, 'manifest'],
			  // options.name modules only
			  minChunks: Infinity
			})
		]
	};
}
