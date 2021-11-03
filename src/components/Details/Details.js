import React, { useState } from 'react';
import './Details.css';
import { Link } from 'react-router-dom'

const Details = ({ selectedID }) => {

  return (
    <div>
      <p>Details!</p>
      <p>{selectedID}</p>
      <Link to='/'>
      <button>Back Home</button>
      </Link>
    </div>
  )
}

export default Details;
