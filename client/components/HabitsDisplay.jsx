import React, { useEffect } from 'react';
import Habit from './Habit.jsx'
import axios from 'axios';
import toServer from '../functions/functions.js';


// displays the cards once created via the popup from 'HabitsCreator' these cards are placed in an area
// the css styling is what causes these buttons to wrap in the habitcontainer 
// these are sent to the HabitsContainer.jsx 
const HabitsDisplay = (props) => {
  const { habitList, deleteHabit, addTotal, deleteTotal} = props;
  const habitCards = [];
  for (let i = 0; i < habitList.length; i++) {
    habitCards.push(<Habit key={i} habitInfo={habitList[i]} deleteHabit={deleteHabit} addTotal={addTotal} deleteTotal={deleteTotal}/>)
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