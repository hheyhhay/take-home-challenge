import React from 'react';
import './Details.css';
import { Link } from 'react-router-dom';



const Details = ({ selectedID, articles, handleChange }) => {

  const selectedArticle = articles.find( ({ id }) => id === Number(selectedID))

  return (
    <div className='details-page'>
      <div className='header'>
        <h1 className='details'>Details!</h1>
      </div>
      <div className='selected-article'>
        <p>{selectedArticle.abstract}</p>
        <p>Read more on NYTimes:</p>
        <a href='{selectedArticle.shortURL}'>{selectedArticle.title}</a>
        <Link to='/'>
        <button onClick={(e) => handleChange()}>Back Home</button>
        </Link>
      </div>
      <img className='background-image' src={selectedArticle.images[0].url} alt='news article photo'/>


    </div>
  )
}

export default Details;
