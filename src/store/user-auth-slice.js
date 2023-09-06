import { createSlice } from "@reduxjs/toolkit";

const initialUserAuthState = {isUserLogedIn: false};

const userAuthSlice = createSlice({
    name: "userAuth",
    initialState: initialUserAuthState,
    reducers: {
        logIn(state) {
            state.isUserLogedIn = true;
        },
        signOut(state) {
            state.isUserLogedIn = false;
        },
    }
});

export const userAuthActions = userAuthSlice.actions;
export default userAuthSlice.reducer;