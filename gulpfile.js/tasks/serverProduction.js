const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const serverProduction = (cb) => {
    plugins.sequence(
        'clean',
        [
            'images',
            'svg:sprite',
            'fonts',
        ],
        [
            'styles:production',
            'webpack:production',
            'templates',
        ],
        [
            'rev',
            'route',
        ],
        cb,
    );
};

gulp.task('server:production', serverProduction);
module.exports = serverProduction;
