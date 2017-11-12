var gulp = require('gulp');
var translateLanguage = require('gulp-translate-properties');
var convertToUnicode = require('gulp-translate-properties/convert');
var postfix = require('gulp-translate-properties/rename');
gulp.task('default', function() {
  return gulp.src(['lang/*.properties','lang/*/*.properties'])
    .pipe(translateLanguage({"APIKey":'',"translateTo":'bn'}))
    .pipe(convertToUnicode())
	.pipe(postfix('_bn_BD'))
    .pipe(gulp.dest('dist'));
});
