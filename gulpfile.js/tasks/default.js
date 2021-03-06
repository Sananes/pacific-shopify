const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

const defaultTask = (cb) => {
    gulpSequence(
        'clean',
        [
            'images',
            'fonts',
            'svg:sprite',
        ],
        'fonts',
        'styles',
        'watch',
        cb,
    );
};

gulp.task('default', defaultTask);
module.exports = defaultTask;
