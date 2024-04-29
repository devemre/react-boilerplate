import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/user.type";
import AppStore from "..";

namespace UserStore {
  type UserStoreType = {
    user: UserType | null;
  };

  const initialState: UserStoreType = {
    user: null,
  };

  const userStoreSlice = createSlice({
    initialState,
    name: "user",
    reducers: {
      setUser: (state, action: PayloadAction<UserType>) => {
        state.user = action.payload;
      },
      removeUser: (state) => {
        state.user = null;
      },
    },
  });

  export const actions = userStoreSlice.actions;
  export const reducer = userStoreSlice.reducer;
  export const select = {
    user: (state: AppStore.RootState) => state.user,
  };
}

export default UserStore;
