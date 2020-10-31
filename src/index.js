const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

//Using mongo to save user data
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

const port = 3333 || process.env.PORT;
app.listen(port, () => {
  console.log(`app online on http://localhost:${port}`);
});
