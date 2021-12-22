/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import PageRoot from './page/index';
import PagesRoot from './pages/index';
import SettingsRoot from './settings/index';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Text, TouchableOpacity } from 'react-native';
import Loading from '../common/loading';

export const novelprops = (props) =>{
  return props;
};

const TabView = createBottomTabNavigator();
export default class Novel extends React.Component {
  constructor(props){
    super(props);
  this.getNovel = this.getNovel.bind(this);
    // this.goToTab = this.goToTab.bind(this);
  }

  componentDidMount(){
    this.getNovel();
    // trackScreen('NovelScreenOpened');
    // trackEvent('NovelScreenOpened');
  }

  componentWillUnmount(){
    let { setNovel, setNovelPage } = this.props;
    setNovel({
      // novel: null,
      isFetching: false,
      error: null,
    });
    setNovelPage({
      no: 1,
    });
  }

  getNovel(){
    let { getNovel} = this.props;
    let{id} = this.props.route.params;
    getNovel(id);
  }
  render() {
    let { novel, isFetching, error, id,navigation } = this.props;
    // console.warn(novel.totalPages);
    // let name = (novel) ? ((novel.urdu_name) ? novel.urdu_name : novel.name) : 'ناول';
    const {params} = this.props.route;
    const Page = (props) => {
      return <PageRoot params={params} {...props} />;
    };
    const Pages = (props) => {
      return <PagesRoot params={params} {...props} />;
    };
    navigation.setOptions({
      title: params.name,
      headerTitleStyle: {fontFamily: 'Alvi-Regular', fontSize: 28},
      headerRight: () => (<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                          <Icon name="settings-outline" size={25}/>
                          </TouchableOpacity>),
    });
    return (
      <TabView.Navigator screenOptions={{headerShown: false, headerTitleStyle: {fontFamily: 'Alvi-Regular'}}}>
        {/* <TabView.Screen name="SettingsRoot" component={SettingsRoot}  options = {{ title: 'کنٹرول', tabBarIcon:(tintColor) => {
          return <Icon name="settings-outline" color={tintColor} size={25}/>;
        }}} /> */}
        <TabView.Screen name="PageRoot" component ={Page} options={{title: 'ناول',tabBarIcon:(tintColor) => {
          return <Icon name="reader-outline" color={tintColor} size={25}/>;
        },}}/>
        <TabView.Screen name="PagesRoot" component ={Pages} options={{title: 'صفحات', tabBarIcon:(tintColor) => {
          return <Icon name="book-outline" color={tintColor} size={25}/>;
        },
        }}/>
      </TabView.Navigator>
    );
  }
}
