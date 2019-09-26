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
    backgroundColor: Colors.white,
    marginRight: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gradientText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: RF(4.2),
    lineHeight: RF(6.2),
    color: Colors.white,
    textAlign: 'center'
  },
  smallGradientCircle: {
    height: wp(8),
    width: wp(8),
    borderRadius: wp(8)/2,
    backgroundColor: Colors.white,
    marginRight: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  smallGradientText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: RF(2.2),
    lineHeight: RF(4.2),
    color: Colors.white,
    textAlign: 'center'
  },
  sliderStyle: {
    height: hp(3.89),
    width: wp(79.47),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: wp(9.33),
    backgroundColor: '#F2F2F2',
    borderRadius: 20
  },
  sliderCategory: {
    height: hp(2.69),
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    paddingHorizontal: wp(2.5)
  },
  sliderCategoryText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: RF(1.1),
    lineHeight: RF(3),
    letterSpacing: 0,
    textAlign: 'center',
    color: Colors.primary2,
    textTransform: 'uppercase',
  },
  searchSection: {
    height: hp(4.43),
    width: wp(86.93),
    marginTop: hp(4.57),
    marginHorizontal: wp(6.4),
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 1,
    shadowColor: 'rgba(137, 137, 137, 0.2)',
    shadowOffset: { height: 2 },
    shadowOpacity: 1
  },
  searchInput: {
    flex: 1,
    fontFamily: 'GothamRounded-Medium',
    fontSize: RF(1.6),
    paddingHorizontal: wp(2),
    backgroundColor: Colors.white,
    color: '#B3B3B3'
  },
  searchSvgContainer: {
    height: hp(4),
    width: wp(5),
    alignSelf: 'center',
    margin: wp(3)
  },
  rowItem: {
    height: hp(7.76),
    paddingHorizontal: wp(9.33),
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#C8C8C8',
    borderWidth: 0.2,
    borderStyle: 'solid'
  },
  rowItemText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: RF(2),
    lineHeight: RF(3),
    color: Colors.text,
    paddingLeft: wp(2)
  }
})
