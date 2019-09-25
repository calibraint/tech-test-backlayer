import React from 'react'
import { View, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { Images } from '../Theme'
import Colors from '../Theme/Colors'
import HelpSvgToJSX from '../SvgComponents/Help'
import LogoSvgToJSX from '../SvgComponents/Logo'
import NotificationSvgToJSX from '../SvgComponents/Notification'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Style = StyleSheet.create({
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: hp(4.26),
		width: wp(100),
		height: hp(15.39),
		left: 0,
		top: 0,
		backgroundColor: Colors.white,
		shadowColor: 'rgba(206, 206, 206, 0.25)',
		shadowOffset:{  height: 3 },
		shadowOpacity: 1.0
	}
})

class Header extends React.Component {
  render() {
    return (
      <View style={Style.header}>
        <HelpSvgToJSX />
        <LogoSvgToJSX />
        <NotificationSvgToJSX />
      </View>
    )
  }
}

Header.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
