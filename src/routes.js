const { Router } = require('express');
const UserController = require('./controllers/UserController');

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

routes.post('/users', UserController.store);

module.exports = routes;
