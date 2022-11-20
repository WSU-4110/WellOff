/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import style from '../../styles'

export default function DropDown(props) {
    const [selected, setSelected] = React.useState("");

    return (
        <View style={style.switchContainer}>
            <Text>{props.name}</Text>
            <SelectList setSelected={setSelected}
                data={props.data}
                search={false}
                defaultOption={props.data[0]}
            />
        </View>
    );
};