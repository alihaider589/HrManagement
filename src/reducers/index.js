import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import EmployeeFormReducer from './EmployeeFormReducer'
import EmployeeReducer from './EmployeeReducer'

export default combineReducers({
    test:()=>[],
    auth:AuthReducer,
    employeeform:EmployeeFormReducer,
    employee:EmployeeReducer
})