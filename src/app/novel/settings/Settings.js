/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLOR_PRIMARY } from '../../colors';

export default class Page extends Component {
  constructor(props){
    super(props);
    this.fontChanged = this.fontChanged.bind(this);
    this.fontFamilyChanged = this.fontFamilyChanged.bind(this);
  }
  componentDidMount(){

  }
  fontChanged(val){
    let { setNovel } = this.props;
    setNovel({
      fontSize: val,
    });
  }
  fontFamilyChanged(itemValue, itemIndex){
    let { setNovel } = this.props;
    setNovel({
      fontFamily: itemValue,
    });
  }
  render() {
    let { isFetching, error, no, novel, fontSize, fontFamily } = this.props;
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.oneSetting}>
            <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 4, marginBottom: 10 }}>
              <Text style={{ flex: 1, fontSize: 18 }}>Size</Text>
              <Text style={{ flex: 1, textAlign: 'right', fontSize: 18 }}>{fontSize}</Text>
            </View>
            <Slider
              thumbTintColor={COLOR_PRIMARY}
              minimumTrackTintColor={COLOR_PRIMARY}
              maximumValue={40}
              minimumValue={10}
              step={1}
              value={fontSize}
              onValueChange={this.fontChanged}
            />
          </View>
          <View style={styles.oneSetting}>
            <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 4 }}>
              <Text style={{ flex: 1, fontSize: 18 }}>Font</Text>
            </View>
            <View style={{ paddingHorizontal: 8 }}>
              <Picker
                mode={'dropdown'}
                selectedValue={fontFamily}
                onValueChange={this.fontFamilyChanged}>
                <Picker.Item label="Regular" value="NotoNaskhArabic-Regular" />
                <Picker.Item label="Bold" value="NotoNaskhArabic-Bold" />
              </Picker>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  oneSetting: {
    flexDirection: 'column',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
  },
});
