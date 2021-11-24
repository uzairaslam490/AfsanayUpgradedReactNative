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
    this.getNovels = this.getNovels.bind(this);
  }

  componentWillUnmount() {
    let {resetNovels} = this.props;
    resetNovels();
  }

  componentDidMount() {}

  getNovels(params = {}, reset = false) {
    let {getNovels, category} = this.props;
    params.categoryId = category.id;
    getNovels(params, reset);
  }
  render() {
    let { novels, isFetching, error, hasMore, category } = this.props;
    return (
    <NovelsList
          isFetching={isFetching}
          novels={novels}
          hasMore={hasMore}
          getNovels={this.getNovels}
    />
    );
  }
}
