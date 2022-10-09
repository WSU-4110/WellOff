import React from 'react';
import {View, Text, StyleSheet, } from 'react-native';

import Highlights from '../assets/components/homepagecomp/Highlights';
import LeftJustifiedItems from '../assets/components/homepagecomp/LeftJustifiedItems';
import RightJustifiedItems from '../assets/components/homepagecomp/RightJustifiedItems';
import TimeModule from '../assets/components/homepagecomp/TimeModule';


const HomeScreen = () => {
    return (
      <View style={styles.container}>
      <LeftJustifiedItems />
      <View style={styles.space} />
      <View style={styles.pngspace} />
      <TimeModule />
      <View style={styles.space} />
      <View style={styles.space} />
      <Highlights />
      <View style={styles.space} />
      <RightJustifiedItems />
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
});

export default HomeScreen;