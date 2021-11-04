import React, { useState } from 'react';
import './Details.css';
import { Link } from 'react-router-dom';



const Details = ({ selectedID, articles, handleChange }) => {

  const selectedArticle = articles.find( ({ id }) => id === Number(selectedID))
  console.log(selectedArticle)


  const imageCards = selectedArticle.images.map(image => {
    return (
      <div className='image-card'>
        <img src={image.url} />
        <a className='image-caption'>{image.caption}</a>
      </div>
      )
    })


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
      <img className='background-image' src={selectedArticle.images[0].url} />


    </div>
  )
}

export default Details;
