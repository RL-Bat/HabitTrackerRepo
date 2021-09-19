import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

const Newquote = () => {

  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://api.kanye.rest')
    // .then(data => console.log(data.data.quote))
    .then((data) => {
      setItems(data.data.quote)
    },
    (error) => {
      setError(error);
    }
  )
  }, [])

    return(
  <div id='happyquote'>
    {items}
  </div>
    )  
}

export default Newquote;

