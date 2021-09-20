import React, { useEffect } from 'react';
import Habit from './Habit.jsx'
import axios from 'axios';
import toServer from '../functions/functions.js';


const HabitsDisplay = (props) => {
  const { habitList, addTotal, deleteTotal, deleteHabit } = props;
  const habitCards = [];
  for (let i = 0; i < habitList.length; i++) {
    habitCards.push(<Habit key={i} habitInfo={habitList[i]} addTotal={addTotal} deleteTotal={deleteTotal} deleteHabit={deleteHabit}/>)
  }
  /*
  useEffect(() => {
    toServer.getHabits(habitCards, url)
  }, [habitCards])
  */
  return(
    <div className='displayCard'>
      <h3>Habits</h3>
      <div className="habitCardsContainer">
        {habitCards}
      </div>
    </div>
  )
};


export default HabitsDisplay;