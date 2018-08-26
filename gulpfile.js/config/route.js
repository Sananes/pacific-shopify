const config = require('./');

module.exports = {
    source: `${config.buildPath}/**/*.{css,html}`,
    dist: `${config.buildPath}`,
    route: {
      newDomain: 'http://sananes.co/pacific',
      oldDomain : 'http://sananes.co/',
      docRoot : '',
      filetypes : ['jpg','jpeg','png','ico','gif','js','eot','ttf','woff2','woff'],
      customAttributes: ['data-custom', 'srcset', 'href'],
      templates: true
    }
};
