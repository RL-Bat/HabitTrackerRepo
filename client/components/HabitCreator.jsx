import React from "react";
import Select from "./select.jsx";

// React hook that will populate the contents of a popup
const HabitCreator = (props) => {
  const {
    addHabit,
    setNewHabit,
    setHabitType,
    setTotalAmountsWanted,
    togglePopup,
  } = props;
  //for date tag in
  const today = new Date();
  return (
    <div className="modal_content">
      <h3>Enter Upcoming Interview</h3>
      <label>Company Name</label>
      <br></br>
      <input type="text" required onChange={(e) => setNewHabit(e)}></input>
      <br></br>
      <label>Position</label>
      <div required onChange={(e) => setHabitType(e)}>
        <Select></Select>
      </div>
      <label for="start">Interview Date:</label> <br></br>
      <input type="date" id="start" value={today}></input>
      <br></br>
      <label>Average Salary</label>
      <input type="text" required placeholder="In US Dollars $"></input>
      <br></br>
      <div>
        <button
          type="Submit"
          onClick={() => {
            togglePopup();
            addHabit();
          }}
        >
          Submit
        </button>
        <br></br>
      </div>
    </div>
  );
};

export default HabitCreator;
