import { createSlice } from "@reduxjs/toolkit";
const loadUserFromlocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('user');
        if (serializedState == null) {
            return{user:null}
        }
        return{user:JSON.parse(serializedState)};
    }
    catch (err) {
        return {user:null}
    }
}
const initialState = loadUserFromlocalStorage();
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducer: {
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        }
    }
})

export const {setuser,logout } = authSlice.actions;
export default authSlice.reducer;