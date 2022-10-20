import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from '../assets/components/reminderpagecomp/Header';
import Notification from '../assets/components/reminderpagecomp/Notifications';
import WeeklyReport from '../assets/components/reminderpagecomp/WeeklyReport';
import Steps from '../assets/components/reminderpagecomp/Steps'; 
import Hours from '../assets/components/reminderpagecomp/Hours';
import NightMode from '../assets/components/reminderpagecomp/NightMode';

const RemindersScreen = () => {
    return (
        <View style = {styles.container}>
            <Header/>
            <Notification/>
            <WeeklyReport/>
            <Steps/>
            <Hours/>
            <NightMode/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#D4F1F4'
    }
});
export default RemindersScreen;