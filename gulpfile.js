var 	gulp 			= require ( 'gulp' ),
		browserSync 	= require ('browser-sync'),
		autoprefixer 	= require ('gulp-autoprefixer'),
		sass 			= require ('gulp-sass'),
		imagemin 		= require ('gulp-imagemin'),
		concat 			= require ('gulp-concat'),
		cp 				= require ('child_process');

var messages = {
	jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/* 
============================================================
	BUILD THE JEKYLL SITE
============================================================
*/

gulp.task('jekyll-build', function (done) {
	browserSync.notify(messages.jekyllBuild);
	return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
		.on('close', done);
});

/* 
============================================================
	REBUILD JEKYLL & DO PAGE RELOAD
============================================================
*/

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
	browserSync.reload();
});

/* 
============================================================
	WAIT FOR JEKYLL-BUILD, THEN LAUCH THE SERVER
============================================================
*/

gulp.task('browser-sync', ['jekyll-build'], function() {
	browserSync({
		server: {
			baseDir: '_site'
		}
	});
});

/* 
============================================================
	TASK SASS
============================================================
*/

gulp.task('sass', function () {
  return gulp.src('assets/css/main.scss')
    .pipe(sass({
        includePaths: ['scss'],
        onError: browserSync.notify
    }))
    .pipe(autoprefixer({
      browsers: ['last 12 versions'],
      cascade: true
    }))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('assets/css'));
});

/* 
============================================================
	TASK IMAGES AND MINIFY
============================================================
*/

gulp.task('imagemin', function(){
	gulp.src('src/image/**/*.{jpg,png,svg,jpeg}')
	.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
	.pipe(gulp.dest('assets/image'));
});

/* 
============================================================
	TASK JAVASCRIPT
============================================================
*/

gulp.task('js', function(){
	return gulp.src('src/js/*.js')
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('_site/assets/js'))
		.pipe(browserSync.reload({stream:true}))
		.pipe(gulp.dest('assets/js'));
});

/* 
============================================================
	TASK WATCH
============================================================
*/

gulp.task( 'watch', function(){
	gulp.watch('_sass/**/*.scss', ['sass']);
	gulp.watch('src/image/**/*.{jpg,png,svg,jpeg}', ['imagemin']);
	gulp.watch('src/js/**/*.js', ['js']);
	gulp.watch(['*.html', '_layouts/*.html', '_posts/*', '_includes/*', 'pages/*'], ['jekyll-rebuild']);
});

gulp.task( 'default', ['imagemin','browser-sync', 'watch'] );