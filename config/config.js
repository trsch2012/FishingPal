var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'fishingpal'
    },
    port: 3000,
    db: 'mongodb://localhost/fishingpal-development'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'fishingpal'
    },
    port: 3000,
    db: 'mongodb://localhost/fishingpal-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'fishingpal'
    },
    port: 3000,
    db: 'mongodb://localhost/fishingpal-production'
    
  }
};

module.exports = config[env];
