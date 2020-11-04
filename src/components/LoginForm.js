import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import { emailChanged, passwordChanged, loginUser } from '../actions'
import Input from './common/Input'
import Card from './common/Card'
import CardSection from './common/CardSection'
import Button from './common/Button'


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text)
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }
    onLoginUser() {
    const {email,password} = this.props
        this.props.loginUser({ email, password})
   

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

                <CardSection>
                    <Button onPasswordChange={this.onLoginUser.bind(this)}>
                        
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
        password: state.auth.password
    }
}

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm)