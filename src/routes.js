const { Router } = require('express');
const DataController = require('./controllers/DataController');
const SessionController = require('./controllers/SessionController');
const UserController = require('./controllers/UserController');

const auth = require('./middlewares/auth');

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

//after this middleware, all routes will require authentication
routes.use(auth);
routes.get('/data', DataController.index);

module.exports = routes;
