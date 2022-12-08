import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch,} from 'react-native';
import style from '../../../styles';

export default function Notification(){
    const [switchValue, setswitchValue] = useState(false);

    const toggleSwitch = (value) =>{
        setswitchValue(value);
    }

    return(
            <View style = {{flexDirection: 'row'}}>
                <Text style = {styles.text}>
                    {switchValue ? 'Disable Notifications' : 'Enable Notifications'}
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
        paddingTop: 30,
        paddingLeft: 30,
    },

    switch: {
        alignItems: 'flex-end',
        paddingTop: 50,
        paddingLeft: 200
    }
});