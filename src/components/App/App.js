// import logo from './logo.svg'
import React, { useState, useEffect } from 'react'
import { fetchArticles } from '../../util/apiCall'
import { dataCleaning } from '../../util/dataCleaning'
import { Route, Link } from 'react-router-dom'
import './App.css';
import Home from '../Home/Home'
import Details from '../Details/Details'

const App = () => {
  const [articles, setArticles] = useState([])
  const [selectedID, setSelectedID] = useState('')
  const [error, setError] = useState('')




  const getData = async () => {
    try {
      fetchArticles().then((articles) => {
        let simplifiedArticles = dataCleaning(articles)
        setArticles(simplifiedArticles)
      })
    }
    catch(error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])


  const handleChange = (id) => {
    console.log(id)
    console.log('hi')
    // setSelectedID(id)
    selectedID ? setSelectedID('') : setSelectedID(id)
    console.log(selectedID)
  }
  // const articleCards = articles.map(article => {
  //   return (
  //     <div className='article-card'>
  //       <h1 className='title'>{article.title}</h1>
  //       <h2 className='abstract'>{article.abstract}</h2>
  //       <p className='author'>{article.byline}</p>
  //       <a className='image-caption'>{article.multimedia[0].caption}</a>
  //       <Link to='/details'>
  //         <button>See Details</button>
  //       </Link>
  //     </div>
  //   )
  // })

  return (
    <div className="App">
      <Route exact path='/'>
        <Home
          articles={articles}
          handleChange={ handleChange }
          />
      </Route>
      <Route exact path='/:id' render={ ({ match }) => {
        const selectedID = match.params.id;
        return <Details
          selectedID={ selectedID }
          articles={ articles }
          handleChange={ handleChange }
          />
      }}
      />
    </div>
  )
}

export default App;
