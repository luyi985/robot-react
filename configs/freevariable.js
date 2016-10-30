const webpack= require('webpack');

module.exports = function(key,value){
	const env = {};
	env[key] = JSON.stringify(value);
	return {
		plugins: [
			new webpack.DefinePlugin(env)
		]
	};
}
