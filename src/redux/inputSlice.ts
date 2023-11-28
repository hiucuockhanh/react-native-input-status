import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export type Input = {
  status: string;
  icon: string;
};

// export type InputState = {
//   inputStates: Input[];
// };

// const initialState: InputState = {
//   inputStates: [],
// };

export type InputState = {
  status: string | null;
  icon: string | null;
};

const initialState: InputState = {
  status: null,
  icon: null,
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    // add: (state, action: PayloadAction<Input>) => {
    //   state.inputStates.push(action.payload);
    // },
    add: (state, action: PayloadAction<{ status: string; icon: string }>) => {
      state.status = action.payload.status;
      state.icon = action.payload.icon;
    },
  },
});

export const { add } = inputSlice.actions;
export const selectInputState = (state: RootState) => state.input;
export default inputSlice.reducer;
