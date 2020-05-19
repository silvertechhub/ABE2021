import { firestore } from "firebase";

export const createProfile = () => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make asyc call

        const firestore = getFirestore(); 

        firestore.collection('profile').add
        dispatch({type: 'CREATE_PROFILE', profile});
    }
};