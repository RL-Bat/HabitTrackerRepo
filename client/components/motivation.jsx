import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

//this is a randomly generated quote pulled via a free API 

const Newquote = () => {

  const [error, setError] = useState(null);
  const [quote, setQuote] = useState([]);
  // const [creator, setCreator] = useState([]);

  useEffect(() => {
    axios.get('https://type.fit/api/quotes')
  .then(passedApiInfo => {
  setQuote(passedApiInfo.data[Math.floor(Math.random() * 1600)].text);
  // setCreator(passedApiInfo.data.author); //wrong logic ATM dont have enough time to make this work
  });
    (error) => {
      setError(error);
    }
  }, []);

    return(
  <div id='notaKanyeQuote'>
    {quote} 
  </div>
    )  
}

export default Newquote;