/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

export default function HighlightReplace() {
    return (
<View style={styles.container}>
    <View style={styles.space} />
        <Text style={styles.HighlightsSubItem2}>You took <Text style={styles.boldtext}>374</Text> more steps than you did yesterday.</Text>
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
    boldtext: {
        margin: 10,
        marginTop: 0,
        fontSize: 30,
        textAlign: 'center',
        color: '#5533FF',
        fontWeight: 'bold',
        textShadowColor: 'rgba(230,255,255, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5,
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
      fontSize: 14,
      textAlign: 'left',
      color: '#4169e1',
      fontWeight: 'bold',
    },
    HighlightsSubItem2: {
        margin: 10,
        marginTop: 0,
        fontSize: 30,
        textAlign: 'center',
        color: '#5533FF',
        textShadowColor: 'rgba(230,255,255, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5,
      },
  });