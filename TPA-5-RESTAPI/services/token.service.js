const jwt = require('jsonwebtoken');

const generateToken = (userId,role,expire) => {
    const token = jwt.sign({
        id: userId,
        role: role
    }, process.env.JWT_SECRET, expire);
    return token;
}

const generateAuthTokens = (user) => {
    const accessToken =  generateToken(user.id, user.role,process.env.JWT_ACCESS_TOKEN_EXPIRE);
    const refreshToken = generateToken(user.id, user.role,process.env.JWT_REFRESH_TOKEN_EXPIRE);
    return {
        accessToken,
        refreshToken
    }
}

const verifyToken = (auth) => {
    try {
        const token = auth.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (error) {
        return null;
    }
}

const refresh = (auth) => {
    let token = auth.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const accessToken = generateToken(decoded.id, decoded.role,process.env.JWT_ACCESS_TOKEN_EXPIRE);
    const refreshToken = generateToken(decoded.id, decoded.role,process.env.JWT_REFRESH_TOKEN_EXPIRE);
    return {
        accessToken,
        refreshToken
    }
}


module.exports = {
    generateToken,
    generateAuthTokens,
    verifyToken,
    refresh
}