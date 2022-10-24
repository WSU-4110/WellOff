import React from 'react';
import { Text, ScrollView } from 'react-native';
import SettingsToggle from '../assets/components/settingspagecomp/SettingToggle'
import SettingsHeader from '../assets/components/settingspagecomp/SettingHeader'
import DropDown from '../assets/components/DropDown'
import Button from '../assets/components/Button'

import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles';

export default function SettingsScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
                <SettingsHeader name="Appearance">
                    <SettingsToggle name="Dark Mode" value={true} />
                    <DropDown name="Themes: "
                        data={[
                            { key: '1', value: 'Blue' },
                            { key: '2', value: 'Green' },
                            { key: '3', value: 'Red' },
                            { key: '4', value: 'Pink' },
                        ]} />
                </SettingsHeader>
                <SettingsHeader name="Permissions">
                    <SettingsToggle name="Health" />
                    <SettingsToggle name="Location" />
                </SettingsHeader>
                {/*<SettingsHeader name="Settings2">
                    <SettingsToggle name="Setting1" />
                    <SettingsToggle name="Setting2" />
                    <SettingsToggle name="Setting3" />
                    </SettingsHeader>*/}
                <SettingsHeader name="Admin Panel">
                    <SettingsToggle name="Dev Mode" />
                    <SettingsToggle name="Manual entry" />
                    <Button name="Reset" backgroundColor="#05445E" color="white"/>
                </SettingsHeader>
            </ScrollView>
        </SafeAreaView>
    );
};