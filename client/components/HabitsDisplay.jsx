import React from 'react';
import Habit from './Habit.jsx'

const HabitsDisplay = (props) => {
  const { habitList, addTotal, deleteTotal} = props;
  const habitCards = [];
  for (let i = 0; i < habitList.length; i++) {
    habitCards.push(<Habit key={i} habitInfo={habitList[i]} addTotal={addTotal} deleteTotal={deleteTotal}/>)
  }

  return(
    <div className='displayCard'>
      <h3>Habits</h3>
      <div>
        {habitCards}
      </div>
    </div>
  )
};

export default HabitsDisplay;