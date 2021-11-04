import React from 'react';
import './Search.css';

const Search = ({ searchArticle }) => {

  return (
    <div className='search-bar'>
      <form id='search-form'>
        <input type='text' onChange={(e) => {searchArticle(e.target.value)}} placeholder='Search...'/>
      </form>
    </div>
  )
}

export default Search;
