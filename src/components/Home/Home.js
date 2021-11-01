import React, { useState } from 'react';
import './Home.css'

const Home = ({articles})  => {
  console.log(articles)

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
    <div className='article-card'>
      <h1 className='title'>{article.title}</h1>
      <h2 className='abstract'>{article.abstract}</h2>
      <p className='author'>{article.byline}</p>
      <img className='article-image' src={article.multimedia[0].url} />
      <a className='image-caption'>{article.multimedia[0].caption}</a>
    </div>
    )
  })

  console.log(articleCards)

  return (
    <div>
      <div>Home</div>
      <div className='article-cards'>{articleCards}</div>
    </div>
)
}

export default Home;
