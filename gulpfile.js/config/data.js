const config = require('./');

module.exports = {
    source: `${config.sourcePath}data/**/*.json`,
    dest: `${config.buildPath}data/`,
    dataJson: {
        fileName: 'data.json',
        edit: (json, file) => {
            var filename = path.basename(file.path),
                primaryKey = filename.replace(path.extname(filename), '');
            var data = {};
            data[primaryKey.toUpperCase()] = json;
            return data;
        },
    }
};
