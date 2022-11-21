/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Background from 'react-native-background-gradient';

export default function TimeModule() {
  return (
    <><View>
      <Text style={styles.LeftText}>12:00 AM</Text>
      <Text style={styles.RightText}>11:59 PM</Text>
    </View>
    <View style={[styles.TimeContainer, styles.elevation]}>
      <View style ={styles.InnerContainer}/>
      <View style ={styles.OuterContainer}/>
    </View></>
  );
}

const styles = StyleSheet.create({
  TimeContainer: {
    padding: 5,
    backgroundColor: '#E6EAFF',
    justifyContent: 'center',
    height: 30,
    borderRadius: 3,
  },
  InnerContainer: {
    backgroundColor: '#FF5500',
    height: 30,
    width: 100,
    borderRadius: 3,
    opacity: .9,
  },
  InnerContainer2: {
    backgroundColor: '#FF5500',
    height: 30,
    width: 100,
    position: 'absolute',
  },
  OuterContainer: {
    backgroundColor: '#AAFF99',
    height: 30,
    width: 75,
    position: 'absolute',
    borderRadius: 3,
    opacity: 1,
  },
  TimeSample: {
    fontSize: 5,
  },
  LeftText: {
    fontSize: 12,
    marginRight: 25,
    fontWeight: 'bold',
    color: '#191970',
  },
  RightText: {
    fontSize: 12,
    position: 'absolute',
    right: 0,
    fontWeight: 'bold',
    color: '#191970',
  },
  elevation: {
    shadowColor: '#220033',
    elevation: 20,
  },
});
