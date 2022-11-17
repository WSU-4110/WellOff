/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, } from 'react-native';

import Highlights from '../assets/components/homepagecomp/Highlights';
import LeftJustifiedItems from '../assets/components/homepagecomp/LeftJustifiedItems';
import TimeModule from '../assets/components/homepagecomp/TimeModule';
import RightJustifiedDatePick from '../assets/components/homepagecomp/RightJustifiedDatePick';
import CircularGraph from '../assets/components/homepagecomp/CircularGraph';


const HomeScreen = () => {
    return (
      <View style={styles.container}>
      <LeftJustifiedItems />
      <View style={styles.space} />
      <RightJustifiedDatePick />
      <View style={styles.pngspace2} />
      <CircularGraph/>
      <View style={styles.pngspace3} />
      <View style={styles.space} />
      <TimeModule />
      <View style={styles.space} />
      <View style={styles.space} />
      <Highlights />
      <View style={styles.space} />
      <View style={styles.space} />
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 15,
  },
  space: {
    padding: 4,
  },
  pngspace: {
    padding: 125,
  },
  pngspace2: {
    padding: 75,
  },
  pngspace3: {
    padding: 40,
  },
});

export default HomeScreen;