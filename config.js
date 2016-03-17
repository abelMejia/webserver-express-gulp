var $ = {
	gulp: require('gulp'),
	express: require('express'),
	path: require('path'),
	open: require('open'),
	fs: require('fs'),
	runSequence: require('run-sequence'),

	server: './../server/server',
	task: `./dev/tasks`,

	dev: {	
		dir: './dev',
		public: {
			dir: './dev/public',
			img: './dev/public/img'
		},
		bower: './bower_components',
	},

	deploy: {
		dir: './deploy',
		public: {
			dir: './deploy/public',
			img: './deploy/public/img',
			vendor: './deploy/public/js/vendor',
			css: './deploy/public/css'
		}
	}

}

$.fn = {
	readFolder: function(folder) {
		var PATH = $.path.join(__dirname, folder)

		var FILES = $.fs.readdirSync(PATH)

		FILES.forEach(function(file){
			return require(`${$.task}/${file}`)($)
		})

	}
}

module.exports = $