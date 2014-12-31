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
    db: 'mongodb://FishingPalMongoDB:H2ktuwd4UDeQN.hsHmf26NSDbNqf_ZaKw3ewfEZ4fWY-@ds030607.mongolab.com:30607/FishingPalMongoDB'
  },

  production: {
    root: rootPath,
    app: {
      name: 'fishingpal'
    },
    port: 3000,
    db: 'mongodb://FishingPalMongoDB:H2ktuwd4UDeQN.hsHmf26NSDbNqf_ZaKw3ewfEZ4fWY-@ds030607.mongolab.com:30607/FishingPalMongoDB'    
  }
};

module.exports = config[env];
