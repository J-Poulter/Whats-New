import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('SearchForm', () => {
  it('should render an element structure that matches the snapshot', () => {
    let mockCategory = [
      {
        id: 1,
        headline: 'The Who postpones Concert',
        img: 'www.mockurl.com',
        description: 'Classic-rock band postponed its concert',
        url: 'www.anotherurl.com'
      }
    ]
    const snap = render(<SearchForm 
      category={mockCategory}
    />)
    expect(snap).toMatchSnapshot()
  });

  it('should be able to select filtered out articles using a search text string', () => {
    const mockCategory = [
      {
        id: 2,
        headline: 'The Who postpones Concert',
        img: 'www.mockurl.com',
        description: 'Classic-rock band postponed its concert',
        url: 'www.anotherurl.com'
      },
      {
        id: 3,
        headline: 'Find this one',
        img: 'www.mock.com',
        description: 'Search text find this',
        url: 'www.diffurl.com'
      }
    ]
    const mockSearchCategory = jest.fn();
    const { getByText, getByPlaceholderText } = render(<SearchForm 
      selectCategory={mockSearchCategory}
      category={mockCategory}
    />)
    const searchInput = getByPlaceholderText('Search for news article here.')
    const searchButton = getByText('Search Now')

    fireEvent.change(searchInput, {target: {value: 'Find this one'}})
    fireEvent.click(searchButton)

    expect(mockSearchCategory).toHaveBeenCalledWith([
      {
        id: 3,
        headline: 'Find this one',
        img: 'www.mock.com',
        description: 'Search text find this',
        url: 'www.diffurl.com'
      }
    ])
  });
});
