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
    event.preventDefault();
    let filteredCategory = this.props.category.filter(article => {
      let searchThis = this.state.searchText.toLowerCase()
      return article.headline.toLowerCase().includes(searchThis)
    })
    this.props.selectCategory(filteredCategory)
    this.setState({searchText: ''})
  }
    
  render() {
    return (
      <form>
        <input 
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