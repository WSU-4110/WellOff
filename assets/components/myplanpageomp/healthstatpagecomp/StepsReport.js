import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function StepsReport() {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.HeaderItem}>Steps Report</Text>
      <Text style={styles.HighlightsItem}>Steps Taken</Text>
      <Text style={styles.HighlightsSubItem}>2500/5000</Text>
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
    justifyContent: 'center',
    textAlign: 'center',
    color: '#191970',
    borderColor: 'black',
    margin: 10,
    marginTop: 0,
    fontSize: 18,
    fontWeight: 'bold',
  },
  HighlightsItem: {
    justifyContent: 'center',
    color: '#191970',
    margin: 10,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
  },
  HighlightsSubItem: {
    justifyContent: 'center',
    margin: 10,
    marginTop: 0,
    fontSize: 14,
    textAlign: 'left',
    color: '#4169e1',
    fontWeight: 'bold',
  },
});