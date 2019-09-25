import { StyleSheet } from 'react-native'
import Fonts from '../../Theme/Fonts'
import Colors from '../../Theme/Colors'
import ApplicationStyles from '../../Theme/ApplicationStyles'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { RFPercentage as RF } from 'react-native-responsive-fontsize'

// 375, 667
export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
  },
  logoContainer: {
    marginTop: hp(12.19),
    height: hp(37.35),
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center'
  },
  emailContainer: {
    height: hp(5.91),
    width: wp(74.93),
    marginHorizontal: wp(12.53)
  },
  passwordContainer: {
    height: hp(5.91),
    width: wp(74.93),
    marginHorizontal: wp(12.53),
    marginTop: hp(1.72)
  },
  inputStyle: {
    height: hp(5.91),
    backgroundColor: '#F6F7FB',
    paddingLeft: wp(2),
    color: Colors.text,
    fontFamily: 'GothamRounded-Medium',
    fontSize: RF(2),
    lineHeight: RF(2.3),
    borderRadius: 5
  },
  forgotTextContainer: {
    height: hp(2.1),
    marginHorizontal: wp(12.53),
    marginTop: hp(1.72)
  },
  forgotText: {
    color: Colors.text,
    fontFamily: 'GothamRounded-Medium',
    fontSize: RF(1.8),
    lineHeight: RF(2.6)
  },
  loginButtonContainer: {
    marginTop: hp(12.19),
    shadowColor: 'rgba(58, 209, 191, 0.6)',
		shadowOffset:{  height: 3, width: 1 },
		shadowOpacity: 1.0
  },
  loginButton: {
    backgroundColor: Colors.primary,
    height: hp(5.91),
    width: wp(74.93),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp(12.53),
    borderRadius: 25
  },
  loginText: {
    color: Colors.white,
    fontFamily: 'GothamRounded-Medium',
    fontSize: RF(2),
    lineHeight: RF(2.6)
  },
  signupTextContainer: {
    height: hp(2.1),
    marginHorizontal: wp(12.53),
    marginTop: hp(3.69),
    alignItems: 'center'
  },
})
