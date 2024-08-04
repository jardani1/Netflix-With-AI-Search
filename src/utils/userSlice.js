import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    // these all will be reducer functions - add user , delete user
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});


export const {addUser , removeUser} = userSlice.actions;

export default userSlice.reducer;