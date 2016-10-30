const webpack= require('webpack');

module.exports = function(){
    return {
	    plugins: [
	      	new webpack.optimize.UglifyJsPlugin({
		        compress: {
		          warnings: false
				},
				mangle: {
				// Mangle matching properties props: /matching_props/,
				// Don't mangle these 
					except: [
						'Array', 'BigInteger', 'Boolean', 'Buffer'
					]
				} 
			})
		] 
	};
}
