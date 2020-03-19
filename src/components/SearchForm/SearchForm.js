import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {}
  }
    
  return (
    <form>
      <input placeholder='Search for news article here.' className='searchInput'/>
      <button className='searchButton' onClick={() => {
        let filteredResults = props.category.filter(article => )
      }}>Search Now</button>
    </form>
  )
}
export default SearchForm;