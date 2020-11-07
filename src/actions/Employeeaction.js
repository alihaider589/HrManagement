import { EMPLOYE_UPDATE,EMPLOYEE_CREATE,EMPLOYEE_FETCH_SUCCESS } from './types'
import firebase from 'firebase'

export const EmployeeUpdate = ({ value, prop }) => {
    return {
        type: EMPLOYE_UPDATE,
        payload: { value, prop }
    }
}
export const createEmployee = ({ name, phone, shift, navigation }) => {
    const { currentUser } = firebase.auth()
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees`).push({ name, phone, shift }).then(() => {
          {  
            dispatch({
                type:EMPLOYEE_CREATE
            })  
            navigation.reset({
                index: 0,
                routes: [{ name: 'Employee' }],

            })}
        })
    }
    
}

export const EmployeeFetch = ()=>{
    const {currentUser} = firebase.auth()
    return(dispatch)=>{
firebase.database().ref(`users/${currentUser.uid}/employees`).on('value',snapshot=>{
    dispatch({type:EMPLOYEE_FETCH_SUCCESS,payload:snapshot.val()})
})
    }
}