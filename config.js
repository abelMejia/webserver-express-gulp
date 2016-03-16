const dev = 'dev'

var $ = {
	gulp: require('gulp'),
	express: require('express'),
	path: require('path'),
	open: require('open'),
	fs: require('fs'),
	runSequence: require('run-sequence'),

	server: './../server',
	task: `./tasks`

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