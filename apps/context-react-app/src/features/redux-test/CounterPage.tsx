import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, selectCount } from './slice';

export const CounterPage = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div style={{display: 'flex', justifyContent: 'space-between', width: '100px'}}>
      <button style={{border: 'solid 1px red'}} onClick={() => dispatch(increment({}))}>+</button>
      <span>{count}</span>
      <button style={{border: 'solid 1px red'}} onClick={() => dispatch(decrement({}))}>-</button>
    </div>
  )

};
