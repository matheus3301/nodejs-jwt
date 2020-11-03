const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class SessionController {
  async store(req, res) {
    const { username, password } = req.body;

    console.log(`${username} trying to create a new session`);

    const user = await User.findOne({ username });

    if (!user)
      return res.status(404).json({
        error: 'User not found',
      });

    const correctPassword = await bcrypt.compare(password, user.password);

    if (!correctPassword)
      return res.status(401).json({
        error: 'Wrong password',
      });

    return res.json({
      token: jwt.sign({ userId: user._id }, process.env.APP_SECRET, {
        expiresIn: '7d',
      }),
    });
  }
}

module.exports = new SessionController();
