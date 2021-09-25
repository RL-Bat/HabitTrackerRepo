const mongoose = require("mongoose");

// const MONGO_URI =
//   "mongodb+srv://ChaoY:Codesmith@cluster0.zjvee.mongodb.net/tracker?retryWrites=true&w=majority";

// mongoose
//   .connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     dbName: "tracker",
//   })
//   .then(() => console.log("Connected to the tracker database!"))
//   .catch((error) => console.log(`Error connecting to database, ${error}`));

const interviewSchema = new mongoose.Schema({
  user_id: { type: Number, required: true },
  interview_id: { type: Number, required: true },
  company_name: { type: String, required: true },
  engineering_position: { type: String, required: true },
  interview_date: { type: String, required: true },
  average_salary: { type: Number, required: true },
  interview_state: { type: String, required: true },
});


// const Interview = mongoose.model("interview", interviewSchema);

module.exports = mongoose.model("interview", interviewSchema);
