import React, { useState, useEffect } from 'react';
import { fetchArticles } from '../../util/apiCall';
import { dataCleaning } from '../../util/dataCleaning';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Details from '../Details/Details';

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
    selectedID ? setSelectedID('') : setSelectedID(id)
  }

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
