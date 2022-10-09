import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch,} from 'react-native';

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
        color: 'darkslateblue', 
        fontSize: 20, 
        paddingTop: 40,
        paddingLeft: 20,
        fontWeight: 'bold',
    },

    switch: {
        alignItems: 'flex-end',
        paddingTop: 80,
    }
});