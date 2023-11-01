import { FC, useState } from 'react';
import classes from './Counter.module.scss';

export const Counter: FC = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className={classes.some}>
      <button onClick={decrement} className={classes.btn}>
        -
      </button>
      {count}
      <button onClick={increment} className={classes.btn}>
        +
      </button>
    </div>
  );
};
