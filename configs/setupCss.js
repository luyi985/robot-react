const webpack= require('webpack');

module.exports = function(paths){
  return {
	    module: {
	      	loaders: [
	      		{
		          test: /\.css$/,
		          loaders: ['style', 'css'],
		          include: paths
				},
		        {
		          test: /\.scss$/,
		          loaders: ["style","css","sass"],
		          include: paths
				}
			]
		}
	};
}
