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
      error: '',
      loginEmails: [ 'kiruthika@calibraint.com', 'test@calibraint.com' ],
      emailRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      passwordRegex: /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i //alphanumeric
    }
  }

  onClickLogin = () => {
    if (this.state.loginEmails.includes(this.state.email) && this.state.password === 'Test1234$') {
      this.setState({ email: '', password: '', error: '' });
      return Navigator.navigate('DashboardScreen');
    } else {
      let error = 'Invalid Email/Password';
      if (this.state.email === '' || !this.state.emailRegex.test(this.state.email)) {
        error = 'Invalid Email';
      } else if (this.state.password === ''|| !this.state.passwordRegex.test(this.state.password)) {
        error = 'Password should be alphanumeric';
      }
      this.setState({ error }, () => {
        setTimeout(() => {
          this.setState({ error: '' });
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
          this.state.error !== '' &&
          <View style={Style.forgotTextContainer}>
            <Text style={[ Style.forgotText, { color: Colors.error }]}>
              { this.state.error }
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
