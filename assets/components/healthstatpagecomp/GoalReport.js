import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function GoalReport() {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.HeaderItem}>Goals</Text>
      <Text style={styles.HighlightsItem}>Trending Down 9%</Text>
      <Text style={styles.HighlightsSubItem}>3500/5000 Steps</Text>
      <Text style={styles.HighlightsItem}>Trending Up 10%</Text>
      <Text style={styles.HighlightsSubItem}>9 Hours</Text>
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
    marginLeft:10
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