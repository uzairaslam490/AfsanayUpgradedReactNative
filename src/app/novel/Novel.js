/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import PageRoot from './page/index';
import PagesRoot from './pages/index';
import SettingsRoot from './settings/index';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native';

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
    let { setNovel } = this.props;
    setNovel({
      // novel: null,
      isFetching: false,
      error: null,
    });
  }

  getNovel(){
    let { getNovel, setNovel, id } = this.props;
    let {novel} = this.props.route.params;
    if (novel){
      setNovel({
        novel: novel,
      });
      id = novel.id;
    }
    getNovel(id);
  }
  render() {
    let { novel, isFetching, error, id,navigation } = this.props;
    let name = (novel) ? ((novel.urdu_name) ? novel.urdu_name : novel.name) : 'ناول';
    const {params} = this.props.route;
    const Page = (props) => {
      return <PageRoot params={params} {...props} />;
    };
    const Pages = (props) => {
      return <PagesRoot params={params} {...props} />;
    };
    navigation.setOptions({
      title: params.novel.urdu_name,
      headerTitleStyle: {fontFamily: 'Alvi-Nastaleeq-Regular', fontSize: 28},
      headerRight: () => (<Button onPress={() => navigation.navigate('Settings')} title="کنٹرول"/>),
    });
    return (
      <TabView.Navigator screenOptions={{headerShown: false, headerTitleStyle: {fontFamily: 'Alvi-Nastaleeq-Regular'}}}>
        {/* <TabView.Screen name="SettingsRoot" component={SettingsRoot}  options = {{ title: 'کنٹرول', tabBarIcon:(tintColor) => {
          return <Icon name="settings-outline" color={tintColor} size={25}/>;
        }}} /> */}
        <TabView.Screen name="PageRoot" component ={Page} options={{title: 'ناول',tabBarIcon:(tintColor) => {
          return <Icon name="reader-outline" color={tintColor} size={25}/>;
        }}}/>
        <TabView.Screen name="PagesRoot" component ={Pages} options={{title: 'صفحات', tabBarIcon:(tintColor) => {
          return <Icon name="book-outline" color={tintColor} size={25}/>;
        },
        }}/>
      </TabView.Navigator>
    );
  }
}
