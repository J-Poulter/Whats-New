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

  it('should render all components needed to match the snapshot', () => {
    const snap = render(<App />)
    expect(snap).toMatchSnapshot();
  });

  it('should change the articles displayed after user clicks on a new category', () => {
    const { getByText } = render(<App />)
    const entertainmentButton = getByText('★entertainment')

    fireEvent.click(entertainmentButton)

    expect(getByText('The final season of BoJack Horseman starts October 25th')).toBeInTheDocument();
  });

  it('should change the articles displayed after user searches for a given headline title', () => {
    const { getByPlaceholderText, getByText } = render(<App />)
    const searchInput = getByPlaceholderText('Search for news article here.')
    const searchButton = getByText('Search Now')

    fireEvent.change(searchInput, { target: { value: 'giant chicken' } })
    fireEvent.click(searchButton)

    expect(getByText('Giant Chicken Skeleton In Denver’s Central Library Stands For More Than Just Dinner')).toBeInTheDocument();
  });
});
