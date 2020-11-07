import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from '../components/LoginForm'
import Employeelist from '../screens/Employeelist';
import EmployeeForm from '../screens/Employeform'

const Stack = createStackNavigator();

function App({props}) {
  return (
    <NavigationContainer>
      <Stack.Navigator  headerMode="none">
        <Stack.Screen  name="Home" component={LoginForm} />
        
        <Stack.Screen
        
        options={{headerTitle:'Employee list',headerTitleAlign:'center',}} name="Employee" component={Employeelist} />
        <Stack.Screen options={{headerTitle:'Employee Form',headerTitleAlign:'center'}} name="EmployeeForm" component={EmployeeForm} />
     
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;