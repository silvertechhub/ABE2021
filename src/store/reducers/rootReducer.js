import authReducer from './authReducer';
import profileReducer from './profileReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'


const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    firebasedatabase: firestoreReducer
   
});

export default rootReducer;