var gulp = require('gulp');
var translateLanguage = require('gulp-translate-properties');
var postfix = require('gulp-translate-properties/rename');
gulp.task('default', function() {
  return gulp.src(['lang/*.properties','lang/*/*.properties'])
    .pipe(translateLanguage({"APIKey":'AIzaSyA860dmW6T0VZEbO7R1mgJNMld233mNDMk',"translateTo":'bn'}))
	.pipe(postfix('_bn_BD'))
    .pipe(gulp.dest('dist'));
});
