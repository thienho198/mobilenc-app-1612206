import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from '../screens/loginPageNew';
import SignUpPage from '../screens/signupPage';

const Stack = createStackNavigator();

const MyStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="Login"
			screenOptions={{
                headerStyle: {
                    backgroundColor: '#2590e9'
                }
            }}
            
		>
			<Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}}/>
			<Stack.Screen name="SignUp" component={SignUpPage} options={{headerShown: false}}/>
		</Stack.Navigator>
	);
};

export default MyStack;
