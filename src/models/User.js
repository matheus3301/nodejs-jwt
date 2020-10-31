const { model, Schema } = require('mongoose');
const bcrypt = require('bcrypt');

const schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

schema.pre('save', async function () {
  if (this.password) {
    this.password = await bcrypt.hash(this.password, 8);
  }
});

module.exports = new model('User', schema);
