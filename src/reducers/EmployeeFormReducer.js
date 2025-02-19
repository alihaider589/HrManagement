import {EMPLOYE_UPDATE,EMPLOYEE_CREATE} from '../actions/types'

const INITIAL_STATE={
    name:'',
    phone:'',
    shift:''
}

export default (state=INITIAL_STATE,action) =>{
    console.log(action)
    switch(action.type){
case EMPLOYE_UPDATE:
    return {...state,[action.payload.prop]: action.payload.value}
    case EMPLOYEE_CREATE:
        return { ...state,...INITIAL_STATE}
        default:
            return state
    }
}