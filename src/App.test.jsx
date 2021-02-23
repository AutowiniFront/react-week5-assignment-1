import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import restaurants from '../fixtures/restaurants';

import App from './App';

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({ restaurants }));

  it('renders restaurants', () => {
    const { queryByText } = render(<App />);

    expect(queryByText('양천주가')).not.toBeNull();
    expect(queryByText('한국식 초밥')).not.toBeNull();
    expect(queryByText('김초밥')).not.toBeNull();
  });

  it('renders region buttons', () => {
    const { queryByText } = render(<App />);

    expect(queryByText('서울')).not.toBeNull();
    expect(queryByText('대전')).not.toBeNull();
    expect(queryByText('대구')).not.toBeNull();
    expect(queryByText('부산')).not.toBeNull();
    expect(queryByText('광주')).not.toBeNull();
    expect(queryByText('강원도')).not.toBeNull();
    expect(queryByText('인천')).not.toBeNull();
    expect(queryByText('제주')).not.toBeNull();
    expect(queryByText('전주')).not.toBeNull();
    expect(queryByText('순천')).not.toBeNull();
  });
});
