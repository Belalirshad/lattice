var jwt = require('jsonwebtoken');

const key = process.env.SECRET;
// TOKEN CREATE
exports.jwtSign = (payload) => {
    const token = jwt.sign({
        data: payload
      }, key, { expiresIn: 60 * 60 });

      return token;
}

// TOKEN VERIFY
exports.verifyJwtToken = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.headers['authorization']; 
    if (token) {
      jwt.verify(token, key, (err, decoded) => {
        if (err) {
          return res.status(401).json({
            success: false,
            message: 'Failed to authenticate token.'
          });
        } else {
          req.user = decoded?.data;
          next();
        }
      });
    } else {
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      });
    }
}