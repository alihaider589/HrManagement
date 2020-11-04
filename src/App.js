import React, { Component } from 'react'
import ReduxThunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'

class App extends Component {

    componentWillMount(){
        if (!firebase.apps.length) {
        const firebaseConfig = {
            apiKey: "AIzaSyCV-G6Kkg_nMdYlhDBgPCDWQj_CXFNMTJk",
            authDomain: "hrmanagement-12433.firebaseapp.com",
            databaseURL: "https://hrmanagement-12433.firebaseio.com",
            projectId: "hrmanagement-12433",
            storageBucket: "hrmanagement-12433.appspot.com",
            messagingSenderId: "286921426338",
            appId: "1:286921426338:web:cdb449594e17885c791efb",
            measurementId: "G-QSL4BY5488"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
       
    }}
    render() {
        const store =createStore(reducers,{},applyMiddleware(ReduxThunk))
        return (
        <Provider store={store}>
        <LoginForm />
        </Provider>
        )
    }
}


export default App