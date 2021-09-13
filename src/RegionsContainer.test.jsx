import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

test('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울 ' },
    ],
  }));

  const { getByText } = render((
    <RegionsContainer />
  ));

  fireEvent.click(getByText('서울'));

  expect(dispatch).toBeCalled();
});
