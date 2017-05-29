// Gulp dependencies
const gulp = require('gulp');

// Build dependencies
const babelify =  require('babelify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// Style dependencies
const concatCss = require('gulp-concat-css');
const sass = require('gulp-sass');

// Development dependencies
const browserSync = require('browser-sync').create();
const runSequence = require('run-sequence');

// Asset dependencies
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');

gulp.task('default', function(callback){
	runSequence(['sass', 'jslibs', 'es6', 'html', 'images', 'fonts', 'browserSync', 'watch'], callback )
});


gulp.task('watch', function(){
	gulp.watch('app/*.html', ['html']);
	gulp.watch('app/js/**/*.js', ['es6']);
	gulp.watch('app/js/libs/*.js', ['jslibs']);
	gulp.watch('app/scss/**/*.scss', ['sass']);
});

//task to optimise images + put them in dist folder
gulp.task('images', function(){
	return gulp.src('app/assets/**/*.+(png|jpg|gif|svg|mp4|ogv|ogg|mp3|wav)')
	.pipe(cache(imagemin({
		interlaced: true
	})))
	.pipe(gulp.dest('dist/assets/'))
});

gulp.task('fonts', function(){
	return gulp.src('app/assets/fonts/**/*')
	.pipe(gulp.dest('dist/assets/fonts/'))
});

gulp.task('es6', function() { //transform all code into es2015 format
	browserify('app/js/bundle.min.js') //take all code from index.js
	.transform('babelify', { //transform the code using the es2015 preset
		presets: ['es2015'],
	})
	.bundle() //return a stream of code
	.pipe(source('bundle.min.js')) //bundle into a new file name
	.pipe(buffer()) //put all new code into
	.pipe(uglify()) //minifies code
	.pipe(gulp.dest('dist/js/'))
	.pipe(browserSync.reload({
		stream: true
	})) //build folder
});

gulp.task('jslibs', function(){
	return gulp.src('app/js/libs/*.+(js|json)')
	.pipe(concat('libs.min.js'))
	.pipe(uglify()) //minifies code
	.pipe(gulp.dest('dist/js/libs/'));
})

//task to turn sass into css and then reload browser
gulp.task('sass', function(){
	return gulp.src('app/scss/**/*.scss')
	.pipe(sass())
	.pipe(concatCss('styles.min.css'))
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
		    baseDir: 'dist'
		},
    })
	console.log("Browser sync is working");
});



gulp.task('html', function(){
	return gulp.src('app/*.html')
	.pipe(gulp.dest('dist/'))
	.pipe(browserSync.reload({
		stream: true
	}));
});
