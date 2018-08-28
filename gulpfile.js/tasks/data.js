const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('../config/data');
const path = require('path');
const merge = require('gulp-merge-json');
const fs = require('fs');
const errorHandler = require('../lib/errorHandler');

const dataTask = function startDataTask() {
    return gulp.src(config.source)

    // Catch errors
    .on('error', errorHandler)

    // Distribute to build path
    .pipe(gulp.dest(config.dest))
};

gulp.task('data', dataTask);
module.exports = dataTask;
