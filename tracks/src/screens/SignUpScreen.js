import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignUpScreen = ({ navigation }) => {
    const { state, signup, cleanErrorMessage, tryLocalSignin } = useContext(AuthContext);

    useEffect(()=> {
        tryLocalSignin();
    }, []);

    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillBlur={ cleanErrorMessage } 
            />
            <AuthForm 
                headerText="Sign up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign up"
                onSubmit={signup}
            />
            <NavLink 
                routeName="Signin"
                text="Already have an account? Sign in instead!"
            />
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