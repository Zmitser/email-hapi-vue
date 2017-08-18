const Boom = require('boom');
module.exports = (server) =>  [
    {
        method: ['GET', 'POST'],
        path: '/auth/google',
        config: {
            auth: 'google',
            handler: function (request, reply) {
                if (!request.auth.isAuthenticated) {
                    return reply(Boom.unauthorized('Authentication failed: ' + request.auth.error.message));
                }
                const profile = request.auth.credentials.profile;
                const User = server.collections().user;
                User.findOne({userId: profile.id}).then(existUser => {
                    let user;
                    if (!existUser) {
                        console.log("Creating user...");
                        User.create({userId: profile.id}).then(created => {
                            user = created;
                        })
                    } else {
                        console.log("Fetching user...");
                        user = existUser;
                    }
                    request.cookieAuth.set({user});
                    return reply.redirect('/');
                });

            }
        }
    },
    {
        method: 'GET',
        path: '/',
        config: {
            auth: 'session',
            handler: function (request, reply) {
                reply('<pre>' + JSON.stringify(request.auth.credentials.user, null, 4) + '</pre>');
            }
        }
    }
];
