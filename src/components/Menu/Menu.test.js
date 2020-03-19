import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Menu', () => {
  it('should render an element structure that matches the snapshot', () => {
    let mockCategories = [
      { title: 'entertainment', dataset: 'entertainment', iconImg: '★' },
      { title: 'local', dataset: 'local', iconImg: '💡' }
    ];
    const snap = render(<Menu 
      categories={mockCategories}
    />)
    expect(snap).toMatchSnapshot();
  });

  it('should change the selected category of new articles display after clicking a button', () => {
    const mockCategories = [
      { title: 'entertainment', dataset: 'entertainment', iconImg: '' }, 
      { title: 'technology', dataset: 'technology', iconImg: '' }
    ];
    const mockChangeCategory = jest.fn();
    
    const { getByText } = render(<Menu 
      selectCategory={mockChangeCategory}
      categories={mockCategories}
    />);

    const entertainmentButton = getByText('entertainment');
    fireEvent.click(entertainmentButton)

    expect(mockChangeCategory).toHaveBeenCalledWith('entertainment')
  });
});
