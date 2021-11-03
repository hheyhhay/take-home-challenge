import React, { useState } from 'react';
import './Details.css';
import { Link } from 'react-router-dom';

const Details = ({ selectedID, articles, handleChange }) => {

  const selectedArticle = articles.find( ({ id }) => id === Number(selectedID))

  return (
    <div>
      <p>Details!</p>
      <p>{selectedArticle.abstract}</p>
      <Link to='/'>
      <button onClick={(e) => handleChange()}>Back Home</button>
      </Link>
    </div>
  )
}

export default Details;
