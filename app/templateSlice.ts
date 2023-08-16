import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Users {
  name: string
  password: string
  designation: string
//  etc etc 
}

interface InitialStateProps {
  users: {} | Users;
  isLoggedIn: boolean;
  userPresent: boolean;
  cartQuantity: number;
}

const initialState: InitialStateProps = {
  users: {},
  isLoggedIn: false,
  userPresent: false,
  cartQuantity: 0,
};

export const templateSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setLogin: (state, action:PayloadAction<Users>) => {
      state.isLoggedIn = true;
      state.users = action.payload;
      state.userPresent = true;
    },
    setNewName: (state, action:PayloadAction<Users>) => {
      state.users = { ...state.users, name: action.payload };
    },

    setLogout: (state, action:PayloadAction<null>) => {
      state.isLoggedIn = false;
      state.users = {};
      state.userPresent = false;
    },
  },
});

export const { setLogin, setLogout } = templateSlice.actions;
export default templateSlice.reducer;
