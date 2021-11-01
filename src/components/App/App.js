// import logo from './logo.svg'
import React, { useState, useEffect } from 'react'
import { fetchArticles } from '../../util/apiCall'
import { Route } from 'react-router-dom'
import './App.css';
import Home from '../Home/Home'

const App = () => {
  const [articles, setArticles] = useState([])
  const [error, setError] = useState('')

  const getData = async () => {
    try {
      fetchArticles().then((articles) => {
        setArticles(articles.results)
      })
    }
    catch(error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <Route exact path='/'>
        <Home
          articles={articles}
          />
        </Route>

    </div>
  )
}

export default App;
