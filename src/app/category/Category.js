/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import Loading from '../common/loading';
import NovelsList from '../common/novels-list';

export default class Home extends Component {
  static get propTypes() {
    return {
      category: PropTypes.object.isRequired,
      novels: PropTypes.array.isRequired,
      isFetching: PropTypes.bool.isRequired,
      error: PropTypes.string,
      getNovels: PropTypes.func.isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.getCategoryNovels = this.getCategoryNovels.bind(this);
  }

  componentWillUnmount() {
    let {resetNovels} = this.props;
    resetNovels();
  }

  componentDidMount() {
  }

  getCategoryNovels(params, reset = false) {
    let {getCategoryNovels} = this.props;
    let {id} = this.props.route.params;
    params.categoryId = id;
    getCategoryNovels(params, reset);
  }
  render() {
    let { novels, isFetching, error, hasMore, navigation } = this.props;
    let {name} = this.props.route.params;
    navigation.setOptions({
      title: name,
      headerTitleStyle: {fontFamily: 'Alvi-Regular', fontSize: 28},
      headerTitleAlign: 'center',
    });
    return (
    <NovelsList
          isFetching={isFetching}
          novels={novels}
          hasMore={hasMore}
          getNovels={this.getCategoryNovels}
          navigation={navigation}
    />
    );
  }
}
