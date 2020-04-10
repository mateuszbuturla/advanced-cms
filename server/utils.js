var jwt = require('jsonwebtoken');

function generateToken(user) {
    if (!user) return null;

    var u = {
        userId: user.userId,
        username: user.username,
    };

    return jwt.sign(u, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24
    });
}

function getCleanUser(user) {
    if (!user) return null;

    return {
        userId: user.userId,
        username: user.username,
    };
}

module.exports = {
    generateToken,
    getCleanUser
}
