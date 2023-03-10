import { combineReducers } from '@reduxjs/toolkit';

import { homeSlice } from '../slices/homeSlice';

const rootReducer = combineReducers({
  home: homeSlice.reducer,
});

export default rootReducer;
