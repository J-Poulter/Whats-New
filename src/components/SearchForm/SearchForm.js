import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
    
  return (
    <form>
      <input placeholder='Search for news article here.' className='searchInput'/>
      <button className='searchButton'>Search Now</button>
    </form>
  )
}
export default SearchForm;