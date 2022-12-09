/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import { currentUser} from './HomePageModel';


export default function WelcomeText() {
    return (
<View style={styles.container}>
    <View style={styles.space} />
        <Text style={styles.HighlightsSubItem}>Welcome {currentUser}.</Text>
        <Text style={styles.HighlightsSubItem2}>Scroll to view your progress.</Text>
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
      fontSize: 30,
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
      fontSize: 50,
      textAlign: 'center',
      color: '#6A4DFF',
      fontWeight: 'bold',
      textShadowColor: 'rgba(230,255,255, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 5,
    },
    HighlightsSubItem2: {
        margin: 10,
        marginTop: 0,
        fontSize: 20,
        textAlign: 'center',
        color: '#8066FF',
        fontWeight: 'bold',
        textShadowColor: 'rgba(230,255,255, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5,
      },
  });