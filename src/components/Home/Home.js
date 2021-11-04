import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = ({ articles, handleChange, foundArticle })  => {

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

  const createFoundArticleCards = (articles) => {
    const articleCards = articles.map(article => {
      return (
        <div className='article-card' id={article.id}>
          <h1 className='title'>{article.title}</h1>
          <p className='author'>{article.author}</p>
          <img className='article-image' src={article.images[0].url} alt='news article' />
          <a className='image-caption'>{article.images[0].caption}</a>
          <Link key={article.id} to={`/${article.id}`}>
            <button onClick={(e) => handleChange(article.id)}>See Details</button>
          </Link>
        </div>
      )
    })
    return articleCards
  }

  return (
    <>
      {!foundArticle && <div className='article-container'>{ articleCards }</div>}
      { foundArticle && <div className='article-container'>{createFoundArticleCards(foundArticle)}</div> }
    </>
  )
}

export default Home;
