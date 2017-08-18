const MongoSails = require('sails-mongo');
const User = require('../models/user')
module.exports = {
    googleClientId: '396439480771-ib86at6p44osm4h5f5diofnadjstlibi.apps.googleusercontent.com',
    googleClientSecret: '3Nn2xSknMRmlmtkTPKukVzRv',
    mongoConfig:  {
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
    }
};
