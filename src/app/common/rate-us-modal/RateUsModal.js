/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React, {Component} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import {COLOR_PRIMARY} from '../../colors';
import {APP_STORE_URL} from '../../config';
import Loading from '../loading';

export default class RateUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
    };
    this.closeModal = this.closeModal.bind(this);
    this.rateUs = this.rateUs.bind(this);
  }
  componentWillunmount(){
    this.setState({
        modalVisible: true,
    });
  }
  closeModal (){
      this.setState({
          modalVisible: false,
      });
  }
  rateUs() {
    Linking.openURL(APP_STORE_URL)
      .then(() => {
        this.closeModal();
        // console.log('success');
      })
      // eslint-disable-next-line handle-callback-err
      .catch(err => {
        this.closeModal();
        // console.log('error');
      });
  }
  render() {
      let {modalVisible} = this.state;
      console.warn(modalVisible);
      if (!modalVisible){
        return <Loading/>;
      } else {
    return (
      <View>
        <Modal
          animationType="none"
          transparent={true}
          visible={true}
          onRequestClose={this.closeModal}>
          <View style={styles.mainContainer}>
            <View style={styles.container}>
              <Text style={styles.heading}>ریٹ کریں</Text>
              <Text style={styles.text}>کیا آپ کو ہماری ایپ پسند آیَ ؟</Text>
              <Text style={styles.text}>اگر پسند آئ تو ریٹ کیجئے </Text>
              <View style={styles.buttonsContainer}>
                <View style={styles.buttonsInnerContainer}>
                  <TouchableOpacity
                    onPress={this.rateUs}
                    activeOpacity={0.7}
                    style={styles.rateUsButton}>
                    <Text style={styles.rateUsButtonText}>جی ہاں</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={this.closeModal}
                    activeOpacity={0.7}
                    style={styles.laterButton}>
                    <Text style={styles.laterButtonText}>جی نہیں</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );}
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 5,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'normal',
    marginBottom: 15,
    color: '#555555',
    fontFamily: 'NotoNaskhArabic-Regular',
    textAlign: 'right',
  },
  text: {
    fontSize: 16,
    color: '#888888',
    fontFamily: 'NotoNaskhArabic-Regular',
    textAlign: 'right',
  },
  buttonsContainer: {
    marginTop: 10,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  buttonsInnerContainer: {
    flexDirection: 'row',
  },
  laterButton: {
    margin: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  laterButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#aaaaaa',
    fontFamily: 'NotoNaskhArabic-Regular',
    textAlign: 'right',
  },
  rateUsButton: {
    margin: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: COLOR_PRIMARY,
  },
  rateUsButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'NotoNaskhArabic-Regular',
    textAlign: 'right',
  },
});
