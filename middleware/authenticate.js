const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({
                message: 'Authorization header missing'
            });
        }

        const token = authHeader.split(' ')[1];
        const secretKey = process.env.JWT_SECRET_KEY; // Use environment variable for secret key

        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();

    } catch (error) {
        console.error('Authentication Error:', error.name, '-', error.message);
        
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({
                message: 'Token has expired'
            });
        }

        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({
                message: 'Invalid token'
            });
        }

        res.status(401).json({
            message: 'Authentication Failed'
        });
    }
};

module.exports = { authenticate };
