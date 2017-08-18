module.exports = {
    identity: 'user',
    connection: 'users',
    attributes: {
        userId: {
            type: 'string',
            primaryKey: true,
            unique: true,
        }
    },
    autoCreatedAt: false,
    autoUpdatedAt: false
};
