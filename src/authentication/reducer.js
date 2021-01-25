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

export default reducer;