// import {createSlice} from '@reduxjs/toolkit';
import actionType from "./actionType";

const initialState = {
    isLogin:false,
    userInfo:{}
};

const reducer = (state = initialState , action)=>{
    
    switch(action.type){
        case  actionType.SET_USER_LOGIN : return{
            ...state,
            isLogin : true,
            userInfo : action.payload.userInfo
        }
        case actionType.SET_USER_LOGOUT : return{
            ...state,
            isLogin: false,
            userInfo : {}
        }
        default : return state;
    }
}



// createSlice({
//     name:'login',
//     initialState,
//     reducers:{
//         setUserInfo : (state,action)=>{
//             state.isLogin = true;
//             state.userInfo = action.payload;
//         }
//     }
// });


// export const {setUserInfo} = loginSlice.actions;

// export default loginSlice.reducer;

export default reducer;