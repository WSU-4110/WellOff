import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { steps, screen, sleep, stepsGoal, screenGoal, sleepGoal, currentUser, currentPicture} from '../homepagecomp/HomePageModel';


export default function StepsReport() {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.HeaderItem}>Screen Time</Text>
      <Text style={styles.HighlightsItem}>Screen Time</Text>
      <Text style={styles.HighlightsSubItem}>{screen}h / {screenGoal}h</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: 5,
    justifyContent: 'center',
    backgroundColor: '#f0ffff',
    borderColor: '#191970',
    width: 380,
    marginLeft: 10,
  },
  HeaderItem: {
    textAlign: 'center',
    color: '#191970',
    borderColor: 'black',
    margin: 10,
    marginTop: 0,
    fontSize: 18,
    fontWeight: 'bold',
  },
  HighlightsItem: {
    color: '#191970',
    margin: 10,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
  },
  HighlightsSubItem: {
    margin: 10,
    marginTop: 0,
    fontSize: 14,
    textAlign: 'left',
    color: '#4169e1',
    fontWeight: 'bold',
  },
});