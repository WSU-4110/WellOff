/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Background from 'react-native-background-gradient';

export default function Highlights() {
  return (
    <ScrollView>
    <Text style={styles.HeaderItem}>Daily Highlights Module</Text>
    <View style={[styles.HeaderContainer, styles.elevation]}>
      <Text style={styles.HighlightsItem}>Average Daily Steps</Text>
      <Text style={styles.HighlightsSubItem}>4559</Text>
      <Text style={styles.HighlightsItem}>Average Daily Sleep</Text>
      <Text style={styles.HighlightsSubItem}>6 hr</Text>
      <Text style={styles.HighlightsItem}>Top Steps Taken</Text>
      <Text style={styles.HighlightsSubItem}>10569 on November 1st, 2022</Text>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: 5,
    marginLeft: 20,
    marginRight: 15,
    justifyContent: 'center',
    backgroundColor: '#E6EAFF',
    borderColor: '#191970',
    width: 340,
    borderRadius: 8,
  },
  HeaderItem: {
    color: '#003CB3',
    borderColor: 'black',
    margin: 10,
    marginTop: 0,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: 'rgba(255,255,255, 0.9)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 6,
  },
  HighlightsItem: {
    color: '#003CB3',
    margin: 10,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(255,230,204, 0.9)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1,
  },
  HighlightsSubItem: {
    margin: 10,
    marginTop: 0,
    fontSize: 14,
    textAlign: 'center',
    color: '#4169e1',
    fontWeight: 'bold',
  },
  HighlightsSubItem2: {
    margin: 10,
    marginTop: 0,
    fontSize: 14,
    textAlign: 'center',
    color: '#4169e1',
    fontWeight: 'bold',
  },
  elevation: {
    shadowColor: '#E6FFFF',
    elevation: 80,
  },
});
