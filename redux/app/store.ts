import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice";
import boxReducer from "../feature/box/boxSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
        box: boxReducer,
  },
});
