import React from 'react';
import './Home.css';
import { Route, Link } from 'react-router-dom';

const Home = ({ articles, handleChange })  => {

  //Function for if I want to show all images, currently showing only first
  const images = (imagesArray) => {
    const imageCards = imagesArray.map(image => {
      return (
        <div className='image-card'>
          <img src={image.url} />
          <a className='image-caption'>{image.caption}</a>
        </div>
        )
      })
    return imageCards
  }

  const articleCards = articles.map(article => {
    return (
      <div className='article-card' id={article.id}>
        <h1 className='title'>{article.title}</h1>
        <p className='author'>{article.author}</p>
        <img className='article-image' src={article.images[0].url} />
        <a className='image-caption'>{article.images[0].caption}</a>
        <Link key={article.id} to={`/${article.id}`}>
          <button onClick={(e) => handleChange(article.id)}>See Details</button>
        </Link>
      </div>
    )
  })

  return (
    <>
      <div className='header'>
        <h1>Your Top News Stories for the Day:</h1>
      </div>
      <div className='article-container'>{ articleCards }</div>
    </>
  )
}

export default Home;
