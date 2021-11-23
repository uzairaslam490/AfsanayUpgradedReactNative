/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { COLOR_PRIMARY, COLOR_FACEBOOK_GREY_90 } from '../../colors';
import Loading from '../../common/loading';
import Icon  from 'react-native-vector-icons/Ionicons';
import { getNovel, setNovel } from '../actions';

export default class Page extends React.Component {
  constructor(props){
    super(props);
     this.nextPage = this.nextPage.bind(this);
     this.previousPage = this.previousPage.bind(this);
   }
  componentDidMount(){
    let { getNovelPage, no, text, setNovelPage} = this.props;
    let {id} = this.props.params;
    if (!text){
      getNovelPage(id, no);
    }
    // console.warn(this.props.novel.totalPages);
    // try {
    //   advert.loadAd(request.build());
    // } catch (err){}
  }
  componentWillUnmount(){
    let { setNovelPage , no, navigation} = this.props;
    console.log(this.props);
    //  if (!navigation.goBack()){
    setNovelPage({
      text: null,
      // no: 1,
      isFetching: false,
      error: null,
    });
  // } else {
  //   setNovelPage({
  //     text: null,
  //     no: 1,
  //     isFetching: false,
  //     error: null,
  //   });
  }
  // // componentWillReceiveProps(props){
  // //   let { no } = props;
  // //   if(no == 2 && this.props.no < 2){
  // //     try{
  // //       if(advert.isLoaded()){
  // //         advert.show();
  // //       }
  // //     }catch(e){}
  // //   }
  // // }
  nextPage(){
    let { getNovelPage, no,novel } = this.props;
    if (no < novel.totalPages){
      let newNo = no + 1;
      getNovelPage(novel.id, newNo);
    }
  }
  previousPage(){
    let { getNovelPage, no, novel } = this.props;
    if (no > 1){
      getNovelPage(novel.id, (no - 1));
    }
  }
  render() {
    let { text, isFetching, error, no, getNovelPage,novel, fontSize, fontFamily } = this.props;
    // console.warn(this.props);
    // const {title} = this.props.params;
    // const {navigation} = this.props;
    //   if (navigation.isFocused()){
    //   navigation.setOptions({tabBarIcon:() => {
    //     return <Icon name="reader" size={25}/>;
    //   }});}
    //   else {
    //     navigation.setOptions({tabBarIcon:() => {
    //       return <Icon name="reader-outline" size={25}/>;
    //     }});
    //   }
    if (error){
      <Text>Error: {error}</Text>;
    }
    if (isFetching || novel === null){
      return <Loading/>;
    } else {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
        <View style={styles.mainContainer}>
          <ScrollView>
            <View style={styles.container}>
                <Text style={[styles.text, { fontSize: fontSize, fontFamily: fontFamily }]}>{`${text}`}</Text>
            </View>
          </ScrollView>
          <View style={styles.controlsContainer}>
              <TouchableOpacity
                style={[styles.control, (no === novel.totalPages) ? styles.disabledButton : {}]}
                activeOpacity={(no >= novel.totalPages) ? 1 : 0.7}
                onPress={this.nextPage}>
                <Text style={[styles.controlText]}>
                  <Icon name="arrow-back-circle-outline" size={26} color={(no === novel.totalPages) ? '#CCCCCC' : COLOR_PRIMARY} />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.control, styles.counter]} activeOpacity={1}>
                <Text style={styles.controlText}>{no}/{novel.totalPages}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.control, (no === 1) ? styles.disabledButton : {}]}
                activeOpacity={(no < 2) ? 1 : 0.7}
                onPress={this.previousPage}>
                <Text style={[styles.controlText]}>
                  <Icon name="arrow-forward-circle-outline" size={26} color={(no === 1) ? '#CCCCCC' : COLOR_PRIMARY} />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
    );}
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  controlsContainer: {
    backgroundColor: COLOR_FACEBOOK_GREY_90,
    flexDirection: 'row',
    elevation: 10,
    padding: 6,
  },
  control: {
    flex: 1,
    padding: 8,
    margin: 3,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
  },
  controlText: {
    textAlign: 'center',
    color: COLOR_PRIMARY,
    fontSize: 16,
  },
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    elevation: 5,
    borderRadius: 6,
  },
  loading: {
    textAlign: 'center',
  },
  text: {
    fontFamily: 'NotoNaskhArabic-Regular',
    fontSize: 22,
  },
  counter: {
    elevation: 0,
  },
  disabledButton: {
    backgroundColor: '#EEEEEE',
    elevation: 0,
  },
});
