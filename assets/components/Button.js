/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles'

export default function Button(props) {
    return (
        <View>
            <TouchableOpacity style={[styles.buttonContainer,{backgroundColor: props.backgroundColor}]}>
                <Text style={{color: props.color}}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    );
};