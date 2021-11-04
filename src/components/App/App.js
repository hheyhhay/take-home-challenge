import React, { useState, useEffect } from 'react';
import { fetchArticles } from '../../util/apiCall';
import { dataCleaning } from '../../util/dataCleaning';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Details from '../Details/Details';
import Search from '../Search/Search';
import NavBar from '../NavBar/NavBar';

const App = () => {
  const [articles, setArticles] = useState([])
  const [selectedID, setSelectedID] = useState('')
  const [foundArticle, setFoundArticle] = useState('')
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

  const searchArticle = (searchWord) => {
    const foundArticle = articles.filter((article) => {

      let lowerCaseTitle = article.title.toLowerCase()
      let lowerCaseWord = searchWord.toLowerCase()
      if (lowerCaseTitle.includes(lowerCaseWord)) {
        return article;
      }
    })
    setFoundArticle(foundArticle)
  }


  return (
    <div className="App">
      <Route exact path='/'>
        <NavBar />
        <Search
          searchArticle= { searchArticle }
          />
        <Home
          articles={articles}
          handleChange={ handleChange }
          foundArticle={ foundArticle }
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
