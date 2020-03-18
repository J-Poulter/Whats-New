import React, { Component } from 'react';
import local from '../../data/local';
import science from '../../data/science';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      science,
      categories:[]
      newThing: ''
    }
  }

  render () {
    return (
      <div className="app">
        YOUR CODE GOES HERE!
        <Menu categories={this.state.categories}
              newThing={this.state.newThing}/>
        <SearchForm />
      </div>
    );
  }
}

export default App;
