/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import Loading from '../../common/loading';
import CategoryListItem from './CategoryListItem';
import { COLOR_PRIMARY } from '../../colors';
import { APP_STORE_URL } from '../../config';
const cover = require('../../../assets/icons/cover.png');
import { createDrawerNavigator } from '@react-navigation/drawer';
import Authors from '../../authors/index';

const NestedDrawer = createDrawerNavigator();
export default class Drawer extends Component {
  static get propTypes(){
    return {
      categories: PropTypes.array.isRequired,
      isFetching: PropTypes.bool.isRequired,
      error: PropTypes.string,
      getCategories: PropTypes.func.isRequired,
    };
  }

  constructor(props){
    super(props);
    // this.rateUs = this.rateUs.bind(this);
    // this.gotoAuthors = this.gotoAuthors.bind(this);
  }

  componentDidMount(){
    let { getCategories } = this.props;
    getCategories();
  }

//   rateUs(){
//     Linking.openURL(APP_STORE_URL).catch((err) => {
//     });
//   }

//   gotoAuthors(){
//     Actions.authors();
//   }

  render(){
    let { categories, isFetching, error } = this.props;
    if (isFetching) {
      return <Loading/>;
    } else  {
    return (
      categories.map((category, index) => {
        return (
        <View>
          <CategoryListItem key={index} category={category} navigation={this.props.navigation}/>
        </View>);
      }
    )

    //   <View style={styles.container}>
    //     <View style={styles.logoContainer}>
    //       <Image source={cover} style={styles.logo} />
    //     </View>
    //     <View>
    //       <TouchableOpacity style={styles.feedback} activeOpacity={0.7} onPress={this.rateUs}>
    //         <Icon name="star" size={28} color={'#f4c20c'} style={{ position: 'absolute', top: 6, left: 8 }} />
    //         <Text style={styles.feedbackText}>اپنی راۓ سے آگاه کریں</Text>
    //       </TouchableOpacity>
    //       <View>
    //         <TouchableOpacity style={styles.feedback} activeOpacity={0.9} onPress={this.gotoAuthors}>
    //           <Text style={styles.feedbackText}>تمام مصنف</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity style={styles.feedback} activeOpacity={0.9}>
    //           <Icon name="keyboard-arrow-down" size={28} color={'#fff'} style={{ position: 'absolute', top: 8, left: 8 }} />
    //           <Text style={styles.feedbackText}>اردو ناول</Text>
    //         </TouchableOpacity>
    //         {categories.map((category, index) => {
    //           return (
    //             <CategoryListItem key={index} category={category} />
    //           );
    //         })}
    //       </View>
    //     </View>
    //   </View>

    );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    padding: 10,
  },
  logo: {
    height: 100,
    width: null,
    resizeMode: 'stretch',
  },
  feedback: {
    padding: 5,
    marginBottom: 5,
    marginHorizontal: 5,
    borderWidth: 0.5,
    borderColor: COLOR_PRIMARY,
    borderRadius: 5,
    backgroundColor: COLOR_PRIMARY,
  },
  feedbackText: {
    fontFamily: 'NotoNaskhArabic-Regular',
    fontSize: 20,
    color: '#FFFFFF',
  },
});
