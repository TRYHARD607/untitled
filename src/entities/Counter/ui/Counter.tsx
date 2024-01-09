import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useAppDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid='value-title'>{counterValue}</h1>
      <button data-testid='increment-btn' onClick={increment}>
        +
      </button>
      <button data-testid='decrement-btn' onClick={decrement}>
        -
      </button>
    </div>
  );
};
