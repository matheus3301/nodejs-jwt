const { Router } = require('express');
const SessionController = require('./controllers/SessionController');
const UserController = require('./controllers/UserController');

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

module.exports = routes;
