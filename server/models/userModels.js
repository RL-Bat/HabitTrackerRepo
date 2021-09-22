const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://ChaoY:Codesmith@cluster0.zjvee.mongodb.net/tracker?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'tracker',
  })
  .then(() => console.log('Connected to the tracker database!'))
  .catch((error) => console.log(`Error connecting to database, ${error}`));

const userSchema = new mongoose.Schema({
  user_id: { type: Number, required },
  user_name: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('users', userSchema);

module.exports = { User };