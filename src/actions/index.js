
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED
} from './types'
import firebase from 'firebase'

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            user => onLoginSuccess(dispatch,user)).catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email.password).then(user=>onLoginSuccess(dispatch,user))
        }).catch(()=>onLoginFailed(dispatch))
    }
}
const onLoginSuccess=(dispatch,user)=>{
    dispatch({
        type:LOGIN_USER_SUCCESS,
        payload:user
    })
}

const onLoginFailed=(dispatch)=>{
    dispatch({
        type:LOGIN_USER_FAILED,
    })
}