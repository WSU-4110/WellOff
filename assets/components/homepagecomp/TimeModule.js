/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function TimeModule() {
  return (
    <><View>
      <Text style={styles.LeftText}>12:00 AM</Text>
      <Text style={styles.RightText}>11:59 PM</Text>
    </View><View style={styles.TimeContainer} /></>
  );
}

const styles = StyleSheet.create({
  TimeContainer: {
    padding: 5,
    backgroundColor: 'azure',
    justifyContent: 'center',
    height: 30,
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
});
