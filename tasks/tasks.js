module.exports = function ($) {

	$.gulp.task('default', function(cb) {
	  	$.runSequence('server',
	              cb);
	}); 
}
