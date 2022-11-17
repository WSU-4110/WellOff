import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from '../../assets/components/myplanpageomp/reminderpagecomp/Header';
import Notification from '../../assets/components/myplanpageomp/reminderpagecomp/Notifications';
import WeeklyReport from '../../assets/components/myplanpageomp/reminderpagecomp/WeeklyReport';
import Steps from '../../assets/components/myplanpageomp/reminderpagecomp/Steps'; 
import Hours from '../../assets/components/myplanpageomp/reminderpagecomp/Hours';
import NightMode from '../../assets/components/myplanpageomp/reminderpagecomp/NightMode';

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