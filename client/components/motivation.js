import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

// async function getApi(api_url) {
//   const response = await fetch(api_url);
//   var data = await response.json();
//   console.log(data);
// };

export const Quote = () => {
  const api_url = "https://zenquotes.io/api/quotes/";

  axios.get(api_url)
  .then(data => console.log(data))
  // .then(response => console.log(response)) 
  
    return(
  <div>

  </div>
    )
  
}

export default Quote;