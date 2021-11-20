const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeaders = req.headers.token;
    if (authHeaders) {
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) res.status(403).json("Token not valid");
            res.user = user;
            next();
        })
    } else {
        return res.status(401).json("Provide Authentication Credentials")
    }
}