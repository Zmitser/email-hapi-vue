const MongoSails = require('sails-mongo');
const User = require('../models/user');
module.export = {
    connections: {
        users: {
            adapter: 'mongodb',
                host: 'localhost',
                port: 27017,
                user: '',
                password: '',
                database: 'emaily'
        }
    },
    adapters: {
        mongodb: MongoSails
    },
    models: [User]
};
