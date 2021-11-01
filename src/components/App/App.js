// import logo from './logo.svg'
import React, { useState, useEffect } from 'react'
import { fetchArticles } from '../../util/apiCall'
// src/util/apiCall.js
import './App.css';

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
    
    </div>
  );
}

export default App;
