/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, Text} from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';

export default class Page extends React.Component {
  constructor(props){
    super(props);
  //   this.nextPage = this.nextPage.bind(this);
  //   this.previousPage = this.previousPage.bind(this);
   }
  componentDidMount(){
    let { getNovelPage, no, text } = this.props;
    let {novel} = this.props.params;
    if (!text){
      getNovelPage(novel.id, no);
    }
    // try {
    //   advert.loadAd(request.build());
    // } catch (err){}
  }
  componentWillUnmount(){
    let { setNovelPage } = this.props;
    setNovelPage({
      text: null,
      no: 1,
      isFetching: false,
      error: null,
    });
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
  // nextPage(){
  //   let { getNovelPage, novel, no } = this.props;
  //   if (no < novel.totalPages){
  //     let newNo = no + 1;
  //     getNovelPage(novel.id, newNo);
  //   }
  // }
  // previousPage(){
  //   let { getNovelPage, novel, no } = this.props;
  //   if (no > 1){
  //     getNovelPage(novel.id, (no - 1));
  //   }
  // }
  render() {
    let { text, isFetching, error, no, novel, getNovelPage, fontSize, fontFamily } = this.props;
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
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{ fontSize: fontSize, fontFamily: fontFamily }}>{`${text}`} </Text>
      </View>
    );
  }
}
