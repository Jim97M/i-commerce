const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeaders = req.headers.token;

    if (authHeaders) {
        const token = authHeaders.split(" ")[1]
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) res.status(403).json("Token not valid");
            res.user = user;
            next();
        })
    } else {

        return res.status(401).json("Provide Authentication Credentials");
    }
}

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.status(403).json("Don't Have Permission");

        }
    });
}

const verifyTokeAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("Don't Have Permission");
        }
    })
}
module.exports = { verifyToken, verifyTokenAndAuthorization }