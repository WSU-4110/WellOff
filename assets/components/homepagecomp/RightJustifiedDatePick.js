/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import {React, Component, useState, useEffect } from 'react';
import {Text, View, StyleSheet, TouchableHighlight, TouchableOpacity, Platform, Button} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import render from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import RightJustifiedItems from './RightJustifiedItems';

export default class RightJustifiedDatePick extends Component {
    constructor () {
        super();
        this.state={
          isVisible: false
        };
    
      };
      handlePicker = () => {
        this.setState({
          isVisible: false
        });
      };
  
      hidePicker = () => {
        this.setState({
          isVisible: false
        });
      };
  
      showPicker = () => {
        this.setState({
          isVisible: true,
        });
      };

      render(){
        return (
          <View>
          <View>
            <TouchableOpacity onPress={this.showPicker}>
            <RightJustifiedItems/>
            </TouchableOpacity>
            </View>

            <DateTimePicker
            isVisible={this.state.isVisible}
            onConfirm={this.handlePicker}
            onCancel={this.hidePicker}
            />
          </View>

        );
      }



}



const styles = StyleSheet.create({
  TimeContainer: {
    padding: 3,
    backgroundColor: 'azure',
    height: 45,
    width: 150,
    left: 235,
    top: 1,
    justifyContent: 'center',
  },
  card: {  
    backgroundColor: 'white',  
    borderRadius: 8,  
    paddingVertical: 20,  
    paddingHorizontal: 25,  
    width: '100%',  
    marginVertical: 10,  
  },  
  TimeSample1: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#191970',
    paddingLeft: 43,
  },
  TimeSample2: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#191970',
    paddingLeft: 38,
  },
  TimeSample3: {
    alignItems: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#191970',
  },
  SampleContent: {
    alignItems: 'center',
    fontSize: 11,
    fontWeight: 'bold',
    color: '#4169e1',
  },
  container: {
  position: 'absolute',
  top: 0,
  alignItems: 'center',
  justifyContent:'center',
  width: 180,
  },
  space: {
    padding: 4,
  },
  dateContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    margin: 10,
  },
  elevation: {
    shadowColor: '#220033',
    elevation: 40,
  },
});