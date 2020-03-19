import React from 'react';
import ReactDOM from 'react-dom';
import NewsArticle from './NewsArticle';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('NewsArticle', () => {
  it('should render an element structure that matches the snapshot', () => {
    const snap = render(<NewsArticle
      key={1}
      img='www.url.com'
      headline='This Article Tests'
      description='Hopefully it provides a snapshot'
      url='www.anotherurl.com'
    />)
    expect(snap).toMatchSnapshot();
  });
  
  it('renders text that we expect', () => {
    const { getByText } = render(<NewsArticle
      key={2}
      img='www.thisurl.com'
      headline='A different test'
      description='Testing for individual elements'
      url='www.diffurl.com'
    />)

    const titleEl = getByText('A different test')
    const descriptEl = getByText('Testing for individual elements')
    
    expect(titleEl).toBeInTheDocument();
    expect(descriptEl).toBeInTheDocument();    
  });
});
