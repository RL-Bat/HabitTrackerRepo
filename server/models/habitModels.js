const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://moonluck:mishra@cluster0.enckb.mongodb.net/habitApp?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'habitApp'
})
.then(() => console.log('Connected to Mongo DB. GG.'))
.catch(err => console.log(err))

const Schema = mongoose.Schema;

const habitSchema = new Schema({
  userName: String,
  updated: {type: Date, default: Date.now},
  // Not nessisary but might be cool
  userPhotoUrl: String,
   // Not nessisary but might be cool
  habitCards: [{
    cardId: String,
    name: String,
    positive: Boolean,
    totalAmountWanted: Number,
    runningTotal: Number,
  }]
})

const HabitsData = mongoose.model('habitcards', habitSchema);



module.exports = { HabitsData };