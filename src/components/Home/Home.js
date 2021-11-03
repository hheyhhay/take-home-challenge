import React, { useState } from 'react';
import './Home.css';
import { Route, Link } from 'react-router-dom'

const Home = ({ articles })  => {

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
  console.log(articles)
  const articleCards = articles.map(article => {

    console.log(article)
    return (
      <div className='article-card' id={article.id}>
        <h1 className='title'>{article.title}</h1>
        <h2 className='abstract'>{article.abstract}</h2>
        <p className='author'>{article.author}</p>
        <img className='article-image' src={article.images[0].url} />
        <a className='image-caption'>{article.images[0].caption}</a>
        <Link key={article.id} to={`/${article.id}`}>
          <button>See Details</button>
        </Link>
      </div>
    )
  })

  return (
    <div>
      <div>Home</div>
      <div className='article-cards'>{articleCards}</div>

    </div>
  )
}

export default Home;
