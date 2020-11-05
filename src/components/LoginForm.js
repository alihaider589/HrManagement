import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import { emailChanged, passwordChanged, loginUser } from '../actions'
import Input from './common/Input'
import Card from './common/Card'
import CardSection from './common/CardSection'
import Button from './common/Button'
import firebase from 'firebase'


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text)
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }
    onLoginUser() {
        const { email, password } = this.props
        this.props.loginUser({ email, password });
    }
    onError(){
        if(this.props.error){
            return (
                <View>
                <Text style={{fontSize:25,textAlign:"center",color:"red",fontWeight:'900',}}>
                {this.props.error}
                </Text>
                </View>
            )
        }
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="email"
                        placeholder="ali@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}

                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}

                    />
                </CardSection>
{this.onError()}
                <CardSection>
                    <Button onPress={this.onLoginUser.bind(this)}>

                        Login
                </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error:state.auth.error
    }
}

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm)