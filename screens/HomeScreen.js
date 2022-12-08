/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, } from 'react-native';

import Highlights from '../assets/components/homepagecomp/Highlights';
import LeftJustifiedItems from '../assets/components/homepagecomp/LeftJustifiedItems';
import TimeModule from '../assets/components/homepagecomp/TimeModule';
import RightJustifiedDatePick from '../assets/components/homepagecomp/RightJustifiedDatePick';
import CircularGraph from '../assets/components/homepagecomp/CircularGraph';
import HighlightReplace from '../assets/components/homepagecomp/HighlightReplace';
import LinearGradient from 'react-native-linear-gradient';
import WelcomeText from '../assets/components/homepagecomp/WelcomeText';


const HomeScreen = () => {
    return (
      <LinearGradient colors={['#D4BFFD', '#8f91f9', '#8f91f9']}>
      <ScrollView>
      <View style={styles.container} >
      <LeftJustifiedItems />
      <View style={styles.space} />
      <RightJustifiedDatePick />
      <View style={styles.space} />
      <View style={styles.space} />
      <View style={styles.pngspace3} />
      <WelcomeText/>
      <View style={styles.pngspace3} />
      <View style={styles.elevation}>
      <CircularGraph/>
      </View>
      <View style={styles.pngspace3} />
      <View style={styles.space} />
      <View style={styles.elevation}>
      <TimeModule />
      </View>
      <View style={styles.pngspace3} />
      <HighlightReplace/>
      <View style={styles.pngspace3} />
      <Highlights />
      <View style={styles.pngspace3} />
      <View style={styles.space} />
      <View style={styles.space} />
    </View>
    </ScrollView>
    </LinearGradient>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  elevation: {
    shadowColor: '#220033',
    elevation: 40,
  },
});

export default HomeScreen;