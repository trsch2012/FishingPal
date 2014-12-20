var express = require('express'),
orm = require('orm'),
inflectorController = require('./server/controllers/inflector'),
NODE_ENV = process.env.NODE_ENV,
server = express();

server.configure(function () {
    server.use(express.json());
    server.use(express.urlencoded());
});

require('./app')(server);

server.use(orm.express('sqlite://./test.db', {
    define: function (db, models, next) {
        // Load your models here
        models.todo = require('./server/models/todo')(db);

        db.settings.set('instance.returnAllErrors', true);

        db.sync();

        next();
    }
}));

server.get('/api/v1', function (req, res) {
    res.send('API v1');
});

server.post('/api/:modelName', function (req, res) {
    inflectorController.post(req, res);
});

server.get('/api/:modelName', function (req, res) {
    inflectorController.findMany(req, res);
});

server.get('/api/:modelName/:id', function (req, res) {
    inflectorController.findOne(req, res);
});

server.put('/api/:modelName/:id', function (req, res) {
    inflectorController.put(req, res);
});

server.delete('/api/:modelName/:id', function (req, res) {
    inflectorController.delete(req, res);
});

if (NODE_ENV === 'production') {
    server.listen(process.env.PORT || 1337, 'localhost');
} else {
    // Export server in dev to work with grunt-express
    module.exports = server;
}