import React from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './DashboardScreenStyle'
import { Images } from '../../Theme'
import Colors from '../../Theme/Colors'
import Header from '../../Components/Header'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import LinearGradient from 'react-native-linear-gradient'
import SegmentedControlTab from "react-native-segmented-control-tab";
import SearchSvgToJSX from '../../SvgComponents/Search'
import { ScrollView } from 'react-native-gesture-handler'

class DashboardScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryGradients:  {
        A: [ '#EE70E9', '#8363F9' ],
        B: [ '#3AD1BF', '#119BD2' ],
        C: [ '#8E70EE', '#2E84C1' ],
        All: [ '#EE70E9', '#8363F9' ],
      },
      categories: [
        {
          name: 'Category A',
          key: 'A'
        },
        {
          name: 'Category B',
          key: 'B'
        },
        {
          name: 'Category C',
          key: 'C'
        },
        {
          name: 'All',
          key: 'All'
        }
      ],
      filters: [
        {
          name: 'All',
          key: 'All'
        },
        {
          name: 'Filter1',
          key: 'F1'
        },
        {
          name: 'Filter2',
          key: 'F2'
        },
        {
          name: 'Filter3',
          key: 'F3'
        }
      ],
      jsonData: {
        "category A": [
          {
            "is_internal": 1,
            "type": "buy",
            "status": "approved",
            "balance": 0.00058
          },
          {
            "is_internal": 0,
            "type": "buy",
            "status": "pending",
            "balance": 0.00058
          },
          {
            "is_internal": 1,
            "type": "buy",
            "status": "approved",
            "balance": 100.058
          },
          {
            "is_internal": 1,
            "type": "sell",
            "status": "approved",
            "balance": 20
          },
          {
            "is_internal": 0,
            "type": "sell",
            "status": "pending",
            "balance": 10.025
          }
        ],
        "category B": [
          {
            "is_internal": 0,
            "type": "buy",
            "status": "pending",
            "balance": 200
          },
          {
            "is_internal": 1,
            "type": "transfer",
            "balance": 10,
            "status": "pending"
          },
          {
            "is_internal": 1,
            "type": "buy",
            "balance": 100.058,
            "status": "approved"
          },
          {
            "is_internal": 0,
            "type": "transfer",
            "balance": 20,
            "status": "approved"
          },
          {
            "is_internal": 0,
            "type": "sell",
            "balance": 10.025,
            "status": "pending"
          }
        ],
        "category C": [
          {
            "is_internal": 1,
            "type": "buy",
            "balance": 200,
            "status": "approved"
          },
          {
            "is_internal": 0,
            "type": "buy",
            "balance": 0.00058,
            "status": "pending"
          },
          {
            "is_internal": 1,
            "type": "buy",
            "balance": 120.058,
            "status": "approved"
          },
          {
            "is_internal": 1,
            "type": "sell",
            "balance": 220,
            "status": "approved"
          },
          {
            "is_internal": 0,
            "type": "sell",
            "balance": 1.025,
            "status": "pending"
          }
        ]
      },
      modifiedJsonData: [],
      selectedCategory: 'A',
      selectedFilter: 'All'
    };
  }

  componentDidMount() {
    const modifiedJsonData = [];
    Object.keys(this.state.jsonData).map(categoryKey => {
      (this.state.jsonData[categoryKey]).map(value => {
        modifiedJsonData.push({ ...value, category: categoryKey.replace('category ', '') });
      })
    })
    this.setState({ modifiedJsonData });
  }

  renderGradientView = (category, smallSize, selected) => {
    return (
      <LinearGradient colors={this.state.categoryGradients[category]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={ smallSize ? Style.smallGradientCircle : Style.gradientCircle}>
        <Text style={ smallSize ? Style.smallGradientText : Style.gradientText}>{category === 'All' ? 'A' : category}</Text>
      </LinearGradient>
    )
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
            { this.renderGradientView(this.state.selectedCategory) }
            <View style={{ justifyContent: 'center'}}><Text style={Style.priceText}>3,700.25</Text></View>
          </View>
          <View style={Style.sliderStyle}>
            {
              this.state.categories.map(category => {
                return (
                  <TouchableOpacity
                    key={`category${category.key}`}
                    style={[ Style.sliderCategory, category.key === this.state.selectedCategory &&  { backgroundColor: Colors.primary2, width: category.key === 'All' ? wp(9.6) : 'auto' }]}
                    onPress={() => { this.setState({ selectedCategory: category.key })}}
                  >
                    <Text style={[ Style.sliderCategoryText, category.key === this.state.selectedCategory &&  { color: Colors.white } ]}>{category.name}</Text>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
        <View style={Style.searchSection}>
            <TextInput
                style={Style.searchInput}
                placeholder="Search Value..."
                placeholderTextColor='#B3B3B3'
                onChangeText={(searchText) => { this.setState({ searchText }) }}
                underlineColorAndroid="transparent"
            />
            <View style={Style.searchSvgContainer}><SearchSvgToJSX /></View>
        </View>
        <View style={[ Style.sliderStyle, { marginTop: hp(4.1) } ]}>
            {
              this.state.filters.map(filter => {
                return (
                  <TouchableOpacity
                    key={`filter${filter.key}`}
                    style={[ Style.sliderCategory, filter.key === this.state.selectedFilter &&  { backgroundColor: Colors.primary2, width: filter.key === 'All' ? wp(9.6) : 'auto' }]}
                    onPress={() => { this.setState({ selectedFilter: filter.key })}}
                  >
                    <Text style={[ Style.sliderCategoryText, filter.key === this.state.selectedFilter &&  { color: Colors.white } ]}>{filter.name}</Text>
                  </TouchableOpacity>
                )
              })
            }
          </View>
          <ScrollView style={{ marginTop: hp(1.5) }}>
            {
              this.state.modifiedJsonData.map((data, index) => {
                return (
                  <View key={`data:${index}`}style={[ Style.rowItem, data.category === this.state.selectedCategory && { backgroundColor: Colors.primary2 }]}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                      { this.renderGradientView(data.category, true, data.category === this.state.selectedCategory) }
                      <View><Text style={[ Style.rowItemText, data.category === this.state.selectedCategory && { color: Colors.white } ]}>Value</Text></View>
                    </View>
                    <View><Text style={ [ Style.rowItemText, data.category === this.state.selectedCategory && { color: Colors.white }]}>{ data.balance }</Text></View>
                  </View>
                )
              })
            }
          </ScrollView>
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
