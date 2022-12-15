import { createSlice, bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { data } from '../../data';
import { components } from '../schemes';

interface SliceState {
  currentCar: number;
  data: Array<components['schemas']['HomeResource']>;
}

const initialState: SliceState = {
  currentCar: 0,
  //   @ts-ignore
  data: data,
};

export const homeSlice = createSlice({
  name: 'authenticationSlice',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setCurrentCar(state, action) {
      state.currentCar = action.payload;
    },
  },
});
export const homeActionCreators = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...homeSlice.actions,
    },
    dispatch,
  );
};
