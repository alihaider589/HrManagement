import React, { Component } from 'react'
import _ from 'lodash'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import BottomBar from '../components/BottomBar'
import Header from '../components/common/Header'
import { EmployeeFetch } from '../actions'
import { connect } from 'react-redux'
import ListView from 'deprecated-react-native-listview'
import CardSection from '../components/common/CardSection'
import Card from '../components/common/Card'



class Employeelist extends Component {
    componentWillMount() {
        this.props.EmployeeFetch()
        this.createDataStore(this.props)

    }

    componentWillReceiveProps(nextProps) {
        this.createDataStore(nextProps)
    }

    createDataStore({ employee }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.dataSource = ds.cloneWithRows(employee)
    }


    renderData = () => {
        return this.props.employee.map((employee) => {
            return (
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('EmployeeForm', { name: employee.name, phone: employee.phone, shift: employee.shift })}>
                    <View>
                        <Card>
                            <CardSection >
                                <Text style={{ textAlign: 'center', paddingLeft: 20 }}>{employee.name}</Text>
                            </CardSection>
                        </Card>
                    </View>
                </TouchableWithoutFeedback>
            )
        })
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <Header headerText="Employees List" Righttext="Add" onPress={() => this.props.navigation.navigate('EmployeeForm')} />
                {this.renderData()}
            </View>
        )
    }
}
const mapStateToProps = state => {
    const employee = _.map(state.employee, (val, uid) => {
        return { ...val, uid }
    })
    return { employee }
}

export default connect(mapStateToProps, { EmployeeFetch })(Employeelist)