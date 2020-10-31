const User = require('../models/User');
class UserController {
  async store(req, res) {
    const { username, password } = req.body;
    const user = await User.create({
      username,
      password,
    });

    return res.json({
      _id: user._id,
    });
  }
}
module.exports = new UserController();
