import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

//this is a randomly generated quote pulled via a free API 


const Newquote = () => {

  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [creator, setCreator] = useState([]);

  useEffect(() => {
    axios.get('https://type.fit/api/quotes')
    // .then(fullInformation => console.log(fullInformation.data[Math.floor(Math.random() * 1600)].author))
    .then(passApiInfo => setItems(passApiInfo.data[Math.floor(Math.random() * 1600)].text),
    // .then(passApiInfo => setCreator(passApiInfo.data[Math.floor(Math.random() * 1600)].author)),
    (error) => {
      setError(error);
    }
  )
  }, [])

    return(
  <div id='notaKanyeQuote'>
    {items}
  </div>
    )  
}

export default Newquote;