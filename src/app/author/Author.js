/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  DrawerLayoutAndroid,
  View,
  Text
} from 'react-native';
// import PageWrapper from '../common/page-wrapper';
import Loading from '../common/loading';
import NovelsList from '../common/novels-list';
// import Header from '../common/header';
// import { trackEvent, trackScreen } from '../common/helpers';

export default class Author extends Component {
  static get propTypes(){
    return {
      author: PropTypes.object,
      novels: PropTypes.array.isRequired,
      isFetching: PropTypes.bool.isRequired,
      error: PropTypes.string,
      getNovels: PropTypes.func.isRequired,
      getAuthor: PropTypes.func.isRequired,
    };
  }

  constructor(props){
    super(props);
    this.getNovels = this.getNovels.bind(this);
    this.getAuthor = this.getAuthor.bind(this);
  }

  componentDidMount(){
    let { id } = this.props.route.params;
    this.getAuthor(id, true);
    // trackScreen('AuthorScreenOpened');
    // trackEvent('AuthorScreenOpened');
  }

  componentWillUnmount(){
    let { resetAuthor } = this.props;
    resetAuthor();
  }

  getAuthor(id, reset = false){
    let { getAuthor } = this.props;
    getAuthor(id, reset);
  }

  getNovels(params = {}){
    let { getNovels, author } = this.props;
    params.authorId = author.id;
    getNovels(params);
  }

  render(){
    let { novels, isFetching, error, hasMore, author, navigation } = this.props;
    let {name} = this.props.route.params;
    let title = (author) ? ((author.urdu_name) ? author.urdu_name : author.name) : 'اردو ناول';
    navigation.setOptions({
        title: name,
        headerTitleStyle: {fontFamily: 'Alvi-Nastaleeq-Regular', fontSize: 28},
    });
    if (!author){
        return (
          <View style={{ marginTop: 20 }}>
            <Loading />
          </View>
        );
      } else {
            return (
              <NovelsList
                isFetching={isFetching}
                novels={novels}
                hasMore={hasMore}
                getNovels={this.getNovels}
                allowAuthorPage={false}
                navigation={this.props.navigation}
              />
            );
          }
  }
}
