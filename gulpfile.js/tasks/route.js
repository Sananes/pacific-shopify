const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('../config/route');

const route = function routeTask() {
  return gulp.src(config.source)
  .pipe(plugins.assetpaths(config.route))
  .pipe(gulp.dest(config.dist))
};

gulp.task('route', route);
module.exports = route;