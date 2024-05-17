module.exports.verifyToken = (req, res, next) => {    
    const bearerHeader = req.headers['authorization'];
    // console.log("Bearer header..............", bearerHeader);
    if (typeof bearerHeader != 'undefined' && bearerHeader) {
        if (bearerHeader.split(' ').length == 2 && bearerHeader.toLowerCase().startsWith("bearer")) {
            const bearerToken = bearerHeader.split(' ')[1];
            req.token = bearerToken;
            next();
        } else {
            res.status(403).send({
                msg: "Authentication failed: Bearer token required."
            })
        }
    } else {
        res.status(403).send({
            msg: "Authentication failed: Bearer token required."
        })
    }
}