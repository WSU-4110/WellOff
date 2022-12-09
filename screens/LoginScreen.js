import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { GetDailySteps, Login } from '../api/api';
// import {AppRegistry} from 'react-native';
// import App from '../App';
// import {name as appName} from './app.json';
// 'react-native-gesture-handler';


user = "";
pass = "";

function SubmitLogin(){
    if(Login(user, pass)){
        throw "logged in!";
    }
    else{
        throw "login failed.";
    }
}

const LoginScreen = () => {
    return (
        <SafeAreaView style={{ flex: 7, justifyContent: 'center', }}>
            <View style={{ alignItems: 'center', paddingHorizontal: 30 }}>
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: '500',
                        marginBottom: 30,
                        color: 'black',
                    }}>
                    Login{' '}
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        paddingBottom: 8,
                        marginBottom: 25,
                    }}>
                    <TextInput
                        placeholder="Email ID"
                        style={{ flex: 8 }}
                        keyboardType="email-address"
                        onChangeText={(value) => user=value}
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        paddingBottom: 8,
                        marginBottom: 25,
                    }}>
                    <TextInput
                        placeholder="Password"
                        style={{ flex: 8 }}
                        secureTextEntry={true}
                        onChangeText={(value) => pass=value}
                    />
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={{ color: 'black', fontWeight: '700' }}>
                            Forgot password?
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => { SubmitLogin(); }}
                    style={{
                        backgroundColor: '#189AB4',
                        padding: 20,
                        borderRadius: 18,
                        marginBottom: 30,
                    }}>
                    <Text style={{ textAlign: 'center', fontWeight: '700', color: 'white', }}>
                        Login
                    </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
                    <Text> New to the app? </Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={{ color: 'black', fontWeight: '700' }}> Register</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    );
}
export default LoginScreen