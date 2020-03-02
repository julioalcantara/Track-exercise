import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Spacer>
            <Text h3>Sing Up</Text>
            </Spacer>
            <Input 
                label ="Email" 
                value = {email}
                onChangeText = {setEmail}
                autoCapitalize = "none"
                autoCorrect = {false}
            />
            <Spacer />
            <Input 
                secureTextEntry = {true}
                label = "Password" 
                value = {password}
                onChange = {setPassword}    
                autoCapitalize = "none"
                autoCorrect = {false}
            />
            <Spacer>
                <Button title = "Sign Up" />
            </Spacer>
            
        </View>
    );
};

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    }
});

export default SignUpScreen;