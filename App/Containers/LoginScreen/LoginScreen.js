import React from 'react'
import {  Text, View, TextInput} from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './LoginScreenStyle'
import { Images } from '../../Theme'
import Colors from '../../Theme/Colors'
import LogoSvgToJSX from '../../SvgComponents/Logo'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Navigator from '../../Services/NavigationService'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loginEmails: [ 'kiruthika@calibraint.com', 'test@calibraint.com' ]
    }
  }

  onClickLogin = () => {
    if (this.state.loginEmails.includes(this.state.email) && this.state.password === '123456') {
      this.setState({ email: '', password: '', showError: false });
      Navigator.navigate('DashboardScreen');
    } else {
      this.setState({ showError: true }, () => {
        setTimeout(() => {
          this.setState({ showError: false });
        }, 2000)
      })
    }
  }

  render() {
    return (
      <View style={Style.container}>
        <View style={Style.logoContainer}>
          <LogoSvgToJSX height='100%' width='40%'/>
        </View>
        {
          this.state.showError &&
          <View style={Style.forgotTextContainer}>
            <Text style={[ Style.forgotText, { color: Colors.error }]}>
              Invalid Email/Password
            </Text>
          </View>
        }
        <View style={Style.emailContainer}>
          <TextInput
            value={this.state.email}
            placeholder='Email'
            style={Style.inputStyle}
            placeholderTextColor={Colors.text}
            textContentType='emailAddress'
            autoCapitalize="none"
            blurOnSubmit={false}
            onSubmitEditing={() => { this.passwordField.focus(); }}
            onChangeText={(text) => this.setState({ email: text.trim() })}
            returnKeyType="next"
          />
        </View>
        <View style={Style.passwordContainer}>
          <TextInput
            value={this.state.password}
            ref={(input) => { this.passwordField = input; }}
            secureTextEntry={true}
            placeholder='Password'
            textContentType='password'
            style={Style.inputStyle}
            placeholderTextColor={Colors.text}
            onChangeText={(text) => this.setState({ password: text.trim() })}
            onSubmitEditing={() => this.onClickLogin()}
            returnKeyLabel="Log in"
            returnKeyType="send"
          />
        </View>
        <View style={Style.forgotTextContainer}>
          <Text style={Style.forgotText}>
            Forgot
            <Text style={{ color: Colors.primary}}> Email </Text>
            Or
            <Text style={{ color: Colors.primary }}> Password</Text>
            ?
          </Text>
        </View>
        <View style={Style.loginButtonContainer}>
          <TouchableOpacity style={Style.loginButton} onPress={() => this.onClickLogin()}>
            <Text style={Style.loginText}>Log In</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.signupTextContainer}>
          <Text style={Style.forgotText}>
            Don't Have An Account? 
            <Text style={{ color: Colors.primary}}> Sign Up</Text>
          </Text>
        </View>
      </View>
    )
  }
}

LoginScreen.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
