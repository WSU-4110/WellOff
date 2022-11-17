import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from '../../assets/components/myplanpageomp/healthstatpagecomp/Header';

const RemindersScreen = () => {
    return (
        <View style = {styles.container}>
            <Header/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#D4F1F4'
    }
});
export default RemindersScreen;