module.exports = (server) => server.auth.strategy('session', 'cookie', {
    password: 'secret_cookie_encryption_password',
    redirectTo: '/auth/google',
    isSecure: false
});