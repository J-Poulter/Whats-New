import React, { Component } from 'react';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import local from '../../data/local';
import science from '../../data/science';
import technology from '../../data/technology';

import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import NewsContainer from '../NewsContainer/NewsContainer';
import NewsArticle from '../NewsArticle/NewsArticle';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {local}
    this.categories = [entertainment, local, health, science, technology]
  }


  selectCategory = (categoryTopic) => {
    this.setState({categoryTopic})
  }

  render () {
    return (
      <div className='app'>
        <div className='leftColumn'>
          <Menu categories={this.state.categories}/>
        </div>
        <div className='rightColumn'>
          <SearchForm />
          <NewsContainer local={this.state.local}/>
        </div>
      </div>
    );
  }
}

export default App;
