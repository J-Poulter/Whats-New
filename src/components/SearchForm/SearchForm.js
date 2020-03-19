import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = { searchText: '' }
  }

  updateState = (event) => {
    this.setState({searchText: event.target.value})
  }

  submitFilteredArticles = (event) => {

  }
    
  render() {
    return (
      <form>
        <input 
          name='searchText'
          placeholder='Search for news article here.' 
          className='searchInput'
          onChange={this.updateState}
          value={this.state.searchText}
        />
        <button className='searchButton' onClick={this.submitFilteredArticles}>
          Search Now
        </button>
      </form>
    )
  }
}
export default SearchForm;