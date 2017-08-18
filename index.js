const Hapi = require('hapi');
const Bell = require('bell');
const AuthCookie = require('hapi-auth-cookie');
const Dogwater = require('dogwater');
const keys = require('./config/keys');
const google = require('./services/google');
const session = require('./services/session');
const authRoutes = require('./routes/auth');

const server = new Hapi.Server();

server.connection({port: 3000});

const dogwaterOptions = keys.mongoConfig;

server.register([Bell,   {register: Dogwater, options: dogwaterOptions}, AuthCookie], function (err) {
    google(server, keys);
    session(server);
    server.route(authRoutes(server));
    server.start();
});