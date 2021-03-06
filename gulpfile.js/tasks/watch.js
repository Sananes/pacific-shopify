const gulp = require('gulp');
const templates = require('../config/templates');
const data = require('../config/data');
const styles = require('../config/styles');
const images = require('../config/images');
const svgSprite = require('../config/svgSprite');
const plugins = require('gulp-load-plugins')();

const watchTask = () => {
    plugins.watch(templates.source, () => { gulp.start('pug:watch'); });
    plugins.watch(styles.base, () => { gulp.start('styles'); });
    plugins.watch(images.source, () => { gulp.start('images'); });
    plugins.watch(svgSprite.source, () => { gulp.start('svg:sprite'); });
    // plugins.watch(data.sourcePath, () => { gulp.start('templates'); });
};

gulp.task('watch', ['browserSync', 'setWatch', 'templates', 'webpack:watch'], watchTask);
module.exports = watchTask;
