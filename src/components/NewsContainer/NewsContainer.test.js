import React from 'react';
import ReactDOM from 'react-dom';
import NewsContainer from './NewsContainer';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('NewsContainer', () => {
  it('should render an element structure that matches the snapshot', () => {
    let mockCategories = [
      { title: 'entertainment', dataset: 'entertainment', iconImg: '★' },
      { title: 'local', dataset: 'local', iconImg: '💡' }
    ];
    const snap = render(<NewsContainer 
      category={mockCategories}
    />)
    expect(snap).toMatchSnapshot();
  });

});
