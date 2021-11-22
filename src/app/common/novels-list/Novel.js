/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import AdBanner from '../ad-banner';

export default class Novel extends Component {
  static get defaultProps() {
    return {
      allowAuthorPage: true,
    };
  }

  constructor(props) {
    super(props);
    this.gotoNovel = this.gotoNovel.bind(this);
    // this.gotoAuthor = this.gotoAuthor.bind(this);
  }
  gotoNovel() {
    let {item,navigation} = this.props;
    let novel = item;
    navigation.navigate('Novel', {novel});
  }
//   gotoAuthor() {
//     let {item, allowAuthorPage} = this.props;
//     if  (allowAuthorPage) {
//       Actions.author({
//         id: item.author.id,
//       });
//     }
//   }
  render() {
    let {item, index,navigation, fontFamily} = this.props;
    let name = item.urdu_name || item.name;
    let description = item.urdu_description || item.description;
    let authorName = item.author.urdu_name
      ? item.author.urdu_name
      : item.author.name;
    return (
      <View>
        <TouchableOpacity activeOpacity={0.7} onPress={this.gotoNovel}>
          <View style={styles.container}>
            <View style={styles.photoContainer}>
              <Image source={{uri: item.thumbUrl}} style={styles.photo} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.description} numberOfLines={2}>
                {description}
              </Text>
              <View>
                {/* <TouchableOpacity onPress={this.gotoAuthor}> */}
                {/* <Text>{authorName}</Text> */}
                {/* </TouchableOpacity> */}
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#cccccc',
    borderRadius: 4,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
    elevation: 4,
  },
  photoContainer: {
    marginTop: 6,
    marginBottom: 6,
    marginRight: 6,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: '#dddddd',
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    textAlign: 'right',
    fontFamily: 'Alvi-Nastaleeq-Regular',
  },
  description: {
    textAlign: 'right',
    fontFamily: 'Alvi-Nastaleeq-Regular',
    fontSize: 18,
  },
  adContainer: {
    marginBottom: 4,
    marginTop: 4,
  },
});
