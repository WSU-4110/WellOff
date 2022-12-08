/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { steps, screen, sleep, stepsGoal, screenGoal, sleepGoal, currentUser, currentPicture} from './HomePageModel';

export default function LeftJustifiedItems() {
    return (
<View style={styles.container}>
    <View style={styles.space} />
    <View style = {[styles.TimeContainer, styles.elevation]}>
    <Text style={styles.TimeSample1}> Steps<Text style={styles. SampleContent}> {steps}/{stepsGoal}</Text> </Text>
    </View>
    <View style={styles.space} />
    <View style={[styles.TimeContainer, styles.elevation]}>
    <Text style={styles.TimeSample2}>  Screen time <Text style={styles.SampleContent}> {screen}h/{screenGoal}h</Text></Text>
    </View>
    <View style={styles.space} />
    <View style={[styles.TimeContainer, styles.elevation]}>
    <Text style={styles.TimeSample3}>  Sleep <Text style={styles. SampleContent}>  {sleep}h/{sleepGoal}h</Text></Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TimeContainer: {
    padding: 3,
    backgroundColor: '#E6EEFF',
    height: 28,
    width: 150,
    borderRadius: 3,
  },
  TimeSample1: {
    alignItems: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#191970',
  },
  TimeSample2: {
    alignItems: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#191970',
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
    color: '#6666FF',
    textShadowColor: 'rgba(255,255,255, 0.9)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 3,
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
  elevation: {
    shadowColor: '#33002A',
    elevation: 25,
  },
});
