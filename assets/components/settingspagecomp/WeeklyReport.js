import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch,} from 'react-native';

export default function WeeklyReport(){
    const [switchValue, setswitchValue] = useState(false);

    const toggleSwitch = (value) =>{
        setswitchValue(value);
    }

    return(
            <View style = {{flexDirection: 'row'}}>
                <Text style = {styles.text}>
                    {switchValue ? 'Disable Weekly Progess Report' : 'Enable Weekly Progress Report'}
                </Text>

                <Switch style = {styles.switch}
                onValueChange={toggleSwitch}
                value = {switchValue}
                />
            </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#05445E', 
        fontSize: 15, 
        // paddingTop: 80,
        paddingLeft: 30,
    
    },

    switch: {
       alignItems: 'flex-end',
       paddingLeft: 125
    }
});