var gulp        = require('gulp');
var pug         = require('gulp-pug');

gulp.task('pug-main', function() {
   gulp.src('./src/templates/*.pug')
    .pipe(pug({pretty:true }))      
    .pipe(gulp.dest('./src/public/'))
});