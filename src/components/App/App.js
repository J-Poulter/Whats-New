import React, { Component } from 'react';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import local from '../../data/local';
import science from '../../data/science';
import technology from '../../data/technology';

import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import NewsContainer from '../NewsContainer/NewsContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { category: local }
    this.categories = [
      { title: 'entertainment', dataset: entertainment, iconImg: '★' }, 
      { title: 'local', dataset: local, iconImg: '💡' }, 
      { title: 'health', dataset: health, iconImg: '🎦' }, 
      { title: 'science', dataset: science, iconImg: '🔬' }, 
      { title: 'technology', dataset: technology, iconImg: '🌡' }
    ]
  }


  selectCategory = (categoryTopic) => {
    this.setState({category: categoryTopic})
  }

  render () {
    return (
      <div className='app'>
        <div className='leftColumn'>
          <Menu categories={this.categories}
            selectCategory={this.selectCategory}/>
        </div>
        <div className='rightColumn'>
          <SearchForm category={this.state.category}
            selectCategory={this.selectCategory}/>
          <NewsContainer category={this.state.category}/>
        </div>
      </div>
    );
  }
}

export default App;
