/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Alert, Button, Platform} from 'react-native';
import {DateTimePicker} from'@react-native-community/DateTimePicker' 

export default function RightJustifiedItems() {
  const{date2, setDate2} = useState(new Date());
  const{mode, setMode} = useState('date');
  const{show, setShow} = useState(false);
  const{text, setText} = useState('Empty');

const onChange = (event, selectedDate) => {
  const currentDate = selectedDate || date;
  setShow(Platform.Android === 'android');
  setDate(currentDate);

  let tempDate = new Date(currentDate);
  let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + '/' + tempDate.getFullYear());
  setText(fDate + '\n');

}

const showMode = (currentMode) => {
  setShow(true);
  setMode(currentMode);
}

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
      <View style={styles.container}>
  <TouchableOpacity title='DatePicker' onPress={() => showMode('date2')}>
    <View style={styles.space} />
    <View style = {styles.TimeContainer}>
    <Text style={styles.TimeSample1}>{time}</Text>
    <Text style={styles.TimeSample2}>{date}</Text>
    </View>
  </TouchableOpacity>

  {show && (
  <DateTimePicker
  testID='dateTimePicker'
  value={date2}
  mode={mode}
  is24Hour={true}
  display='default'
  onChange={onChange}
  />)}

  </View>

  );
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
});
