/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Highlights() {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.HeaderItem}>Daily Highlights Module</Text>
      <Text style={styles.HighlightsItem}>Steps Taken</Text>
      <Text style={styles.HighlightsSubItem}>3578/5000</Text>
      <Text style={styles.HighlightsItem}>Average Screentime</Text>
      <Text style={styles.HighlightsSubItem}>3 hr</Text>
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
  },
  HeaderItem: {
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
