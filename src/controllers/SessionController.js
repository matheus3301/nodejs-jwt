class SessionController {
  async store(req, res) {
    const { username, password } = req.body;
  }
}

module.exports = new SessionController();
