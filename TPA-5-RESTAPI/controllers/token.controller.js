const tokenServices = require('../services/token.service');

// Refresh Token
const refresh = async (req, res) => {
    try {
        const newToken = await tokenServices.refresh(req.headers.authorization);
        res.status(200).json({
            message: 'Successfully refresh token',
            data: newToken
        });
    } catch (error) {
        if (error.message === 'ForbiddenError') {
            console.log(error.message);
            res.status(403).json({
                message: 'Forbidden'
            });
        }
        else {
            console.log(error.message);
            res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    }
}

module.exports = {
    refresh
}