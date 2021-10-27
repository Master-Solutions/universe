import { createSlice, PayloadAction, ReducersMapObject } from '@reduxjs/toolkit';

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0
}

export const reducers: ReducersMapObject<any, any> = {
  increment: (state: CounterState) => { state.value += 1 },
  decrement: (state: CounterState) => { state.value -= 1 },
  incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
    state.value += action.payload
  }
}

export const selectAll = (state: any) => state;
export const selectCount = (state: { counter: CounterState }) => state.counter.value;

export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers
});

export const { increment, decrement, incrementByAmount } = slice.actions;
