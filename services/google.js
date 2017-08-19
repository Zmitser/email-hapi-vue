module.exports = (server, keys) => server.auth.strategy('google', 'bell', {
    provider: 'google',
    password: 'cookie_encryption_password_secure',
    isSecure: false,
    clientId: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    location: "http://localhost:3000"
});