import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render all components needed', () => {

  });
});
