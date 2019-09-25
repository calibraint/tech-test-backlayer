import { StyleSheet } from 'react-native'
import Fonts from '../../Theme/Fonts'
import ApplicationStyles from '../../Theme/ApplicationStyles'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { RFPercentage as RF } from 'react-native-responsive-fontsize'
import { Colors } from '../../Theme'

// 375, 667
export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
  },
  portfolioCard: {
    height: hp(27.83),
    width: wp(100),
    marginTop: hp(0.8),
    backgroundColor: Colors.white,
		shadowColor: 'rgba(206, 206, 206, 0.25)',
		shadowOffset:{ height: 4 },
    shadowOpacity: 1,
    paddingTop: hp(5.17),
    paddingRight: wp(11.2),
    paddingBottom: hp(3.82),
  },
  portfolioText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: RF(2.5),
    lineHeight: RF(3),
    color: Colors.text,
    paddingLeft: wp(2)
  },
  priceText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: RF(8),
    lineHeight: RF(10),
    letterSpacing: -3,
    color: '#3AD1BF'
  },
  gradientText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: RF(4.2),
    lineHeight: RF(6.2),
    color: Colors.white
  },
  dot: {
    height: wp(1.87),
    width: wp(1.87),
    borderRadius: wp(1.87)/2,
    backgroundColor: '#31C5C3'
  },
  gradientCircle: {
    height: wp(12),
    width: wp(12),
    borderRadius: wp(12)/2,
    backgroundColor: 'red',
    marginRight: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
