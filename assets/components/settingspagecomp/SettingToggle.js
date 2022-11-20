/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

import style from '../../../styles';

export default function SettingToggle(props) {

    const [switchValue, setswitchValue] = useState(props.value);

    const toggleSwitch = (value) => {
        setswitchValue(value);
    }

    return (
        <View style={style.switchContainer}>
            <Text>{props.name}</Text>
            {/* <Text>{(props.value) ? "true" : "false"}</Text> example of how you display a boolean value*/}
            <View style={{ justifyContent: 'space-evenly' }}>
                <Switch style={style.switch}
                    onValueChange={toggleSwitch}
                    value={switchValue}
                />
            </View>
        </View>
    );
}