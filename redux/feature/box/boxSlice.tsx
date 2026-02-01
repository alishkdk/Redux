import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BoxState {
  height: number;
  width: number;
}

const initialState: BoxState = {
  height: 100,
  width: 100,
};

const boxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {
    incrementheight: (state, action: PayloadAction<number>) => {
      state.height += action.payload;
    },
    decrementheight: (state, action: PayloadAction<number>) => {
      state.height = Math.max(10, state.height - action.payload); // Prevent negative height
    },
    incrementwidth: (state, action: PayloadAction<number>) => {
      state.width += action.payload;
    },
    decrementwidth: (state, action: PayloadAction<number>) => {
      state.width = Math.max(10, state.width - action.payload); // Prevent negative width
    },
    resetBox: (state) => {
      state.height = initialState.height;
      state.width = initialState.width;
    },
  },
});

export const { 
  incrementheight, 
  decrementheight, 
  incrementwidth, 
  decrementwidth, 
  resetBox 
} = boxSlice.actions;
export default boxSlice.reducer;