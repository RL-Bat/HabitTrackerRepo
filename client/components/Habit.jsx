import React from 'react';

// declaring a React Hook for the Habit card.
// these are sent to the HabitsDisplay.jsx 
const Habit = (props) => {
  const {habitInfo, deleteHabit, addTotal, deleteTotal} = props;

  return (
    <main>
    {/* Each card is given a Habit name, type, goal, and progress */}
    {/* Each card has 3 buttons with a discriptive associated name */}
    {/* Each card and button are passed dynamic variables, that are defined via its current state */}
      <p><strong>Habit: </strong>{habitInfo.habit} </p>
      <p><strong>Type: </strong>{habitInfo.type} </p>
      <p><strong>Goal: </strong>{habitInfo.totalAmountsWanted} </p>
      <p><strong>Progress: </strong>{habitInfo.total} </p>
      <p>Did you {habitInfo.habit}?</p>
      <button className='add_total' onClick={() => addTotal(habitInfo.habitId)} >yes</button>
      <button className='delete_total' onClick={() => deleteTotal(habitInfo.habitId)}>no </button>
      <button className='delete_card' onClick={() => deleteHabit(habitInfo.habitId)}>Delete Card</button>
    </main>
  )
}

export default Habit;