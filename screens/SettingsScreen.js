import React from 'react';
import { Text, ScrollView, NativeModules } from 'react-native';
import SettingsToggle from '../assets/components/settingspagecomp/SettingToggle'
import SettingsHeader from '../assets/components/settingspagecomp/SettingHeader'
import DropDown from '../assets/components/DropDown'
import Button from '../assets/components/Button'

import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles';

const setGoogleFit = (value) => {
    fetch('../api/AppSettings.js/set-google-fit-status', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          enabled: value
        })
      });
};

const googleFitStatus = () => {
    fetch("http://localhost:8081/api/AppSettings.js/set-google-fit-status", {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
}

export default function SettingsScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
                <SettingsHeader name="Appearance">
                    <SettingsToggle name="Dark Mode" value={false} />
                    <DropDown name="Themes: "
                        data={[
                            { key: '1', value: 'Blue' },
                            { key: '2', value: 'Green' },
                            { key: '3', value: 'Red' },
                            { key: '4', value: 'Pink' },
                        ]} />
                </SettingsHeader>
                <SettingsHeader name="Permissions">
                    <SettingsToggle name="Health" value={googleFitStatus} onValueChanged={setGoogleFit}/>
                    <SettingsToggle name="Location" />
                </SettingsHeader>
                <SettingsHeader name="Admin Panel">
                    <SettingsToggle name="Dev Mode" />
                    <SettingsToggle name="Manual entry" />
                    <Button name="Reset" backgroundColor="#05445E" color="white"/>
                </SettingsHeader>
            </ScrollView>
        </SafeAreaView>
    );
};