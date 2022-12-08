import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GoalReport from '../../assets/components/myplanpageomp/healthstatpagecomp/GoalReport'
import StepsReport from '../../assets/components/myplanpageomp/healthstatpagecomp/StepsReport'
import ScreenReport from '../../assets/components/myplanpageomp/healthstatpagecomp/ScreenReport'
import WeeklyReport from '../../assets/components/myplanpageomp/healthstatpagecomp/WeeklyReport'

const HealthScreen = () => {
    return (
        <View style = {styles.container}>
            <StepsReport/>
            <View style={styles.space} />
            <View style={styles.space} />
            <ScreenReport/>
            <View style={styles.space} />
            <View style={styles.space} />
            <GoalReport/>
            <View style={styles.space} />
            <View style={styles.space} />
            <WeeklyReport/>
            <View style={styles.space} />
            <View style={styles.space} />
            <View style={styles.space} />
            <View style={styles.space} />
            <View style={styles.space} />
            <View style={styles.space} />
            <View style={styles.space} />
            <View style={styles.space} />
            <View style={styles.space} />
            <View style={styles.space} />
            <View style={styles.space} />
            <View style={styles.space} />
            <View style={styles.space} />
            <View style={styles.space} />
            <View style={styles.space} />
            <View style={styles.space} />
            <View style={styles.space} />
            <View style={styles.space} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#D4F1F4',
      justifyContent: 'center'
    },

    space: {
        padding: 4,
    }
});
export default HealthScreen;