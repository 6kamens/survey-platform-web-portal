import { configureStore} from '@reduxjs/toolkit';
import { composeWithDevTools } from "redux-devtools-extension";
import {createStore , combineReducers } from "redux";
import loginReducer from "../features/Login/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer =  combineReducers({
    login : loginReducer,
  });
  
const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(rootReducer,composeWithDevTools());
const store = createStore(persistedReducer,composeWithDevTools());
const persistor = persistStore(store);

export {
    store, 
    persistor
}
  
  
// const store = configureStore({
//     reducer:{
//         login: loginSlice
//     }
// },composeWithDevTools());

// export default store;