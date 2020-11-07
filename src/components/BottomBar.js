import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default class Employeelist extends Component {
    render() {
        return (
            <View style={{ flex: 1,  justifyContent: "flex-end" }}>
                <View style={{ height: 40, padding: 10,  alignSelf: "flex-end", width: '100%', alignContent: "center", justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={{ backgroundColor: "red", borderRadius: 20, width: 35, height: 35, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ textAlign: "center", fontSize: 30 }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
