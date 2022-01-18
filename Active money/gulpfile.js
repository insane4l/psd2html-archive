var gulp = require('gulp');
var bs = require('browser-sync');
var sass = require('gulp-sass');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

	bs.init({
		server: "./src"
});

	gulp.watch("src/sass/*.sass", ['sass']);
	gulp.watch("src/*.html").on('change', bs.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
	return gulp.src("src/sass/*.sass")
		.pipe(sass())
		.pipe(gulp.dest("src/css"))
		.pipe(bs.stream());
});

gulp.task('default', ['serve']);