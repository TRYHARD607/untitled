import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

import { Counter } from './Counter';

describe('Counter', () => {
  test('render', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment', async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const btn = screen.getByTestId('increment-btn');
    await userEvent.click(btn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement', async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const btn = screen.getByTestId('decrement-btn');
    await userEvent.click(btn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
