var gulp = require('gulp');
var htmlsplit = require('gulp-split');

gulp.task('split', function () {

    return gulp.src('samples/test/template.html')
        .pipe(htmlsplit())
        .pipe(gulp.dest('./samples/results'));
});

gulp.task('splitWithOption', function () {
    //source file type (if not all *.HTML files), source stream is different .HTM vs .HTML
    return gulp.src('samples/template.htm')
        .pipe(htmlsplit({
            singleLine: true,
            destExt: ".js",
            template: "$folderName -> $fileName \n $fileContent"
        }))
        .pipe(gulp.dest('./samples/results'));
});

gulp.task('splitAll', function () {

    return gulp.src('samples/*.*')
        .pipe(htmlsplit({
            destExt: ".js",
            template: "$folderName -> $fileName {$sourceExtension} \n $fileContent"
        }))
        .pipe(gulp.dest('./samples/results'));
});

gulp.task('default',['split']);