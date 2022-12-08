/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */

import {React, Component, useState, useEffect } from 'react';
import {Text, View, StyleSheet, TouchableHighlight, TouchableOpacity, Platform, Button} from 'react-native';
import {DateTimePicker} from '@react-native-modal-datetime-picker';
import moment from 'moment';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import RightJustifiedDatePick from './RightJustifiedDatePick';
import { app } from '../../../Firebase/firebase';
export default function RightJustifiedItems(){  

    const [time, setTime] = useState(null);
    useEffect(() => {
      let time = getCurrentTime();
      setTime(time);
    }, []);


    const getCurrentTime = () => {
        let today = new Date();
        let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
        let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
        let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
        return hours + ':' + minutes + ':' + seconds;
      }

      const [date, setDate] = useState(null);
      useEffect(() => {
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        setDate(date);
      }, []);


    return (
    <View styles={styles.container}>
    <View style={styles.space} />
    <View style = {[styles.TimeContainer, styles.elevation]}>
    <Text style={styles.TimeSample1}>{time}</Text>
    <Text style={styles.TimeSample2}>{date}</Text>
    </View>
      </View>
        );
 };




const styles = StyleSheet.create({
  TimeContainer: {
    padding: 3,
    backgroundColor: '#E6EEFF',
    height: 45,
    width: 150,
    left: 235,
    top: 1,
    justifyContent: 'center',
    borderRadius: 3,
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
  card: {  
    backgroundColor: 'azure',  
    borderRadius: 8,  
    paddingVertical: 20,  
    paddingHorizontal: 10,  
    width: '100%',  
    marginVertical: 10,  
  },  
  dateContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    margin: 10,
  },
  elevation: {
    shadowColor: '#33002A',
    elevation: 25,
  },
});
