import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';

export const TimeClock = () => {
  //Declaring a new state variable, date
  let [date, setDate] = useState(new Date());
  
  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000)
    return function clearTimer() {
      clearInterval(timer)
    }
  });
  return(
    <div id={'time'}>
      <p>Time : {date.toLocaleTimeString()}</p>
      <p>Date : {date.toLocaleDateString()}</p>
    </div>
  )
}

export default TimeClock;