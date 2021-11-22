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
                <Picker.Item label="AlQalam-Shekastah-Regular" value="AlQalam-Shekastah-Regular"/>
                <Picker.Item label="AlQalam-Taj-Nastaleeq-Regular" value="AlQalam-Taj-Nastaleeq-Regular"/>
                <Picker.Item label="AlQalam-Ubaid-Regular" value="AlQalam-Ubaid-Regular"/>
                <Picker.Item label="Alvi-Regular" value="Alvi-Regular"/>
                <Picker.Item label="Alvi-Nastaleeq-Regular" value="Alvi-Nastaleeq-Regular"/>
                <Picker.Item label="Attari-Quran-Regular" value="Attari-Quran-Regular"/>
                <Picker.Item label="Jameel-Noori-Nastaleeq-Khaseeda" value="Jameel-Noori-Nastaleeq-Kasheeda"/>
                <Picker.Item label="PDMS-Bukhari-Regular" value="PDMS-Bukhari-Regular"/>
                <Picker.Item label="PDMS-Jauhar-Regular" value="PDMS-Jauhar-Regular"/>
                <Picker.Item label="PDMS-Penci-Nafees-Regular" value="PDMS-Penci-Nafees-Regular"/>
                <Picker.Item label="PDMS-Saleem-QuranFont-Regular" value="PDMS-Saleem-QuranFont-Regular"/>
                <Picker.Item label="Rouqa-Unicode-Rouqa-Unicode" value="Rouqa-Unicode-Rouqa-Unicode"/>
                <Picker.Item label="Sulus-Unicode-Sulus-Unicode" value="Sulus-Unicode-Sulus-Unicode"/>
                <Picker.Item label="Tehreer-Regular" value="Tehreer-Regular"/>
                <Picker.Item label="UL-Sajid-Heading-Regular" value="UL-Sajid-Heading-Regular"/>
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
