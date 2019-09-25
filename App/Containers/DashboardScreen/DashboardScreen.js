import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './DashboardScreenStyle'
import { Images } from '../../Theme'
import Colors from '../../Theme/Colors'
import Header from '../../Components/Header'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import LinearGradient from 'react-native-linear-gradient'
import SegmentedControlTab from "react-native-segmented-control-tab";

class DashboardScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories:  {
        A: {
          gradient: [ '#EE70E9', '#8363F9' ],
        },
        B: {
          gradient: [ '#3AD1BF', '#119BD2' ],
        },
        C: {
          gradient: [ '#8E70EE', '#2E84C1' ]
        }
      },
      selectedCategory: 'A',
    };
  }


  render() {
    return (
      <View style={Style.container}>
        <Header />
        <View style={Style.portfolioCard}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: wp(13.33) }}>
            <View style={Style.dot}></View>
            <Text style={Style.portfolioText}>Your Portfolio</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: hp(2), height: hp(7.83), paddingLeft: wp(10.13)  }}>
            <LinearGradient colors={this.state.categories[this.state.selectedCategory].gradient} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={Style.gradientCircle}>
              <Text style={Style.gradientText}>{this.state.selectedCategory}</Text>
            </LinearGradient>
            <View style={{ justifyContent: 'center'}}><Text style={Style.priceText}>3,700.25</Text></View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: wp(9.33),  backgroundColor: '#F2F2F2', }}>
          </View>
        </View>
      </View>
    )
  }
}

DashboardScreen.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardScreen)
