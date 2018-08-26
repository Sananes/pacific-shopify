const config = require('./');

module.exports = {
    source: `${config.assetsPath}fonts/**/*`,
    dest: `${config.buildPath}assets/fonts/`,
};
