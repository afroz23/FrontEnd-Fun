import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type userState = {
  isAuthenticated: boolean;
};

const initialState: userState = {
  isAuthenticated: false,
};

const user = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    setUserAuthenticated: (state: userState, action: PayloadAction<boolean>): void => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setUserAuthenticated } = user.actions;
export default user.reducer;
