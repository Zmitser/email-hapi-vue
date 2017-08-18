module.exports = (server) =>server.auth.strategy('session', 'cookie', {
    password: 'secret_cookie_encryption_password', //Use something more secure in production
    redirectTo: '/auth/google', //If there is no session, redirect here
    isSecure: false //Should be set to true (which is the default) in production
});
