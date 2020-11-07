import React, { Component } from 'react'
import { Text, View ,Picker} from 'react-native'
// import {Picker} from '@react-native-community/picker'
import {connect} from 'react-redux'

import {EmployeeUpdate,createEmployee} from '../actions'

import BottomBar from '../components/BottomBar'
import Header from '../components/common/Header'
import Input from '../components/common/Input'
import Card from '../components/common/Card'
import CardSection from '../components/common/CardSection'
import Button from '../components/common/Button'




 class Employeform extends Component {
    
     onButtonPresshandler(){
         const {name,phone,shift,navigation} =this.props
         this.props.createEmployee({name,phone,navigation,shift:shift||'Monday'})
     }
    render() {
        const {data} = this.props.routes.params
        console.log(data)
        return (
            <View>
                <Header headerText="Employee Form" />
                <Card>
                    <CardSection>
                        <Input
                         label="Name"
                         placeholder="Ali Haider" 
                         value={this.props.name}
                         onChangeText={value=>this.props.EmployeeUpdate({prop:'name',value})}
                        
                        />
                    </CardSection>
                    <CardSection>
                    <Input 
                    label="Phone"
                    placeholder="03152929915"
                    value={this.props.phone}
                    onChangeText={value=>this.props.EmployeeUpdate({prop:'phone',value})}

                    />

                    </CardSection>
                    <CardSection style={{flexDirection:'column'}}>
                    <Text style={{fontSize:20,paddingLeft:20}}>Shift</Text>
                    <Picker
                    
                    selectedValue={this.props.shift}
                    onValueChange={value=>this.props.EmployeeUpdate({prop:'shift',value})}
                    >
                    <Picker.Item label="Monday" value="Monday"/>
                    <Picker.Item label="Tuesday" value="Tuesday"/>
                    <Picker.Item label="Wednesday" value="Wednesday"/>
                    <Picker.Item label="Thursday" value="Thursday"/>
                    <Picker.Item label="Friday" value="Friday"/>
                    <Picker.Item label="Saturday" value="Saturday"/>
                    <Picker.Item label="Sunday" value="Sunday"/>

                    </Picker>
                    </CardSection>
                    <CardSection>
                    <Button onPress={this.onButtonPresshandler.bind(this)}>
                    Create
                    </Button>
                    </CardSection>

                </Card>
            </View>
        )
    }
}

const mapStateToProps = state=>{

        const  {name,phone,shift} =state.employeeform
        return{
             name,phone,shift
        }
    
}
export default connect (mapStateToProps,{EmployeeUpdate,createEmployee}) (Employeform)