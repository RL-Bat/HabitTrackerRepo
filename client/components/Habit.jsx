import React from 'react';

const Habit = (props) => {
  const {habitInfo ,addTotal, deleteTotal} = props;

  return (
    <main>
      <p><strong>Habit: </strong>{habitInfo.habit} </p>
      <p><strong>Type: </strong>{habitInfo.type} </p>
      <p><strong>Goal: </strong>{habitInfo.totalAmountsWanted} </p>
      <p><strong>Progress: </strong>{habitInfo.total} </p>
      <p>Did you {habitInfo.habit}?</p>
      <button className='add_total' name={habitInfo.habitId} onClick={() => addTotal(habitInfo.habitId)} >yes</button>
      <button className='delete_total' name={habitInfo.habitId} onClick={() => deleteTotal(habitInfo.habitId)}>no </button>
    </main>

  )
}

export default Habit;