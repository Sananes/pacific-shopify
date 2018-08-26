const browserSync = require('browser-sync');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('../config/fonts');

// Images
const fonts = () => gulp.src(config.source)

    // Only add to stream if changed
    .pipe(plugins.changed(config.dest))

    // Distribute to build path
    .pipe(gulp.dest(config.dest))

    // Notify browsersync of changes
    .pipe(browserSync.stream())

    // Show notification if watching
    .pipe(plugins.if(global.isWatching, plugins.notify({ message: 'Font task complete' })));

gulp.task('fonts', fonts);
module.exports = fonts;

