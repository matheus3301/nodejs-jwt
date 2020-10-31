const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({
      error: 'Token not provided!',
    });

  //Bearer Token
  const [, token] = authHeader.split(' ');
  try {
    const payload = jwt.verify(token, process.env.APP_SECRET);
    req.userId = payload.userId;

    return next();
  } catch (err) {
    return res.status(401).json({
      error: 'Invalid token',
    });
  }
};
