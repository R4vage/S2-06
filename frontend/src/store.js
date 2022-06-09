import {configureStore, createSlice} from "@reduxjs/toolkit"


const initialState = localStorage.getItem("loginState")? JSON.parse(localStorage.getItem("loginState")):{
    userID : null,
    email: null,
    token: null,
    isLogged: false
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUser: (state, action) => {
            return (action.payload)
        },
        
        signOut: (state, action) =>{
            localStorage.removeItem("loginState");
            return({
                userID : null,
                email: null,
                token: null,
                isLogged: false
            })

        }


    }



})

export const store = configureStore({
    reducer:loginSlice.reducer
})

store.subscribe(()=>{
    localStorage.setItem('loginState', JSON.stringify(store.getState()))
  })

