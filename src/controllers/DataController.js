const data = require('../data/data.json');

class DataController {
  async index(req, res) {
    return res.json(data);
  }
}

module.exports = new DataController();
