import React from 'react';

const HabitCreator = props => {

  const { addHabit, setNewHabit, setHabitType, setTotalAmountsWanted, togglePopup} = props;
  return (
    <div className="modal_content">
      <h3>Create New Habit</h3>
      <label>Habit: </label><br></br>
      <input type="text" required onChange={(e) => setNewHabit(e)}></input><br></br>
      <label>Habit type:</label>
        <div required onChange={(e) => setHabitType(e)}>
        <input type='radio' value='positive' name='type' defaultChecked />To keep<br></br>
        <input type='radio' value='negative' name='type' />Not to keep<br></br>
      </div>
        <label>Goal:</label> <br></br>
        <input type="number" required placeholder='(days)' onChange={(e) => setTotalAmountsWanted(e)}></input><br></br>
      <div>  
        <button type="Submit" onClick={() => {togglePopup(); addHabit();}}>Submit</button><br></br>
      </div> 
    </div>
  )
}

export default HabitCreator;