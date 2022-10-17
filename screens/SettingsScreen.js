import React, { useState } from 'react';
import { View, Text, Switch, ScrollView } from 'react-native';
import SettingsToggle from '../assets/components/settingspagecomp/SettingToggle'
import SettingsHeader from '../assets/components/settingspagecomp/SettingHeader'

import style from '../styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles';

export default function SettingsScreen() {
    const [switchValue, setswitchValue] = useState(false);

    const toggleSwitch = (value) => {
        setswitchValue(value);
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <SettingsHeader name="Appearance">
                    <SettingsToggle name="Dark Mode" />
                    <Text style={styles.switchContainer}>Themes: [put dropdown here]</Text>
                </SettingsHeader>
                <SettingsHeader name="Permissions">
                    <SettingsToggle name="Health" />
                    <SettingsToggle name="Location" />
                </SettingsHeader>
                <SettingsHeader name="Settings2">
                    <SettingsToggle name="Setting1" />
                    <SettingsToggle name="Setting2" />
                    <SettingsToggle name="Setting3" />
                </SettingsHeader>
                <SettingsHeader name="Admin Panel">
                    <SettingsToggle name="Dev Mode" />
                    <SettingsToggle name="Manual entry" />
                    <SettingsToggle name="Setting3" />
                </SettingsHeader>
            </ScrollView>
        </SafeAreaView>
    );
};