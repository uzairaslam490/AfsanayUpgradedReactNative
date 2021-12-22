/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';

export default class NotificationItem extends Component {
  constructor(props) {
    super(props);
  }
  gotoNovel() {
    let {notifications,navigation} = this.props;
    navigation.navigate('Novel', {
      id: notifications.id,
      name: notifications.urdu_name,
    });
  }
  render() {
    let {notifications} = this.props;
    let title = notifications.title;
    let message = notifications.message;
    let description = notifications.description;
    let name = notifications.urdu_name;
    let thumbUrl = notifications.thumbUrl;
    if (!thumbUrl) {
      return (
          <TouchableOpacity>
          <View style={styles.container}>
            <TouchableOpacity>
              <Text style={{fontSize: 20, textAlign: 'left'}}>{title}</Text>
              <Text style={{fontSize: 18, textAlign: 'left'}}>{message}</Text>
            </TouchableOpacity>
          </View>
          </TouchableOpacity>
      );
    } else {
    return (
      <View>
        <TouchableOpacity activeOpacity={0.7} onPress={this.gotoNovel}>
          <View style={styles.container}>
            <View style={styles.photoContainer}>
              <Image source={{uri: thumbUrl}} style={styles.photo} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.description} numberOfLines={2}>
                {description}
              </Text>
              <View>
                {/* <TouchableOpacity onPress={this.gotoAuthor}>
                <Text style={{fontFamily: 'Alvi-Nastaleeq-Regular', fontSize: 20}}>مصنف : {authorName}</Text>
                </TouchableOpacity> */}
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
          }
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
    fontFamily: 'Alvi-Regular',
  },
  description: {
    textAlign: 'right',
    fontFamily: 'Alvi-Regular',
    fontSize: 18,
  },
  adContainer: {
    marginBottom: 4,
    marginTop: 4,
  },
});
