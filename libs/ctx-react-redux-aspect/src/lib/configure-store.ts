import {
  AnyAction,
  combineReducers,
  configureStore as rtkConfigureStore,
  createSlice,
  Reducer,
} from '@reduxjs/toolkit';
import { Context, Resource } from '@unvrse/context';
import { CTX_REDUX_ASPECT } from './constants';

const configureStore = (ctx: Context) => {
  const slices = ctx.store.list(CTX_REDUX_ASPECT.TYPE_RTK_SLICE);
  const reducers: Record<string, Reducer<any, any>> = {};
  slices.forEach((r) => {
    const slice = r.getValue();
    reducers[r.id as string] = slice.reducer;
  });

  // console.log("Reducer:", reducers);
  const store = rtkConfigureStore({
    reducer: combineReducers(reducers),
  });
  return store;
};

export { configureStore };
