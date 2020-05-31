import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from '../screens/loginPageNew';
import SignUpPage from '../screens/signupPage';
import MainTabNavigator from '../bottomTabNavigation/mainTabNavigator';

const Stack = createStackNavigator();

const MyStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="MainTab"
			screenOptions={{
				headerStyle: {
					backgroundColor: '#2590e9'
				},
				headerTitleStyle: {
					color: 'white'
				},
				headerTintColor: 'white'
			}}
		>
			<Stack.Screen name="MainTab" component={MainTabNavigator} options={{ headerShown: false }} />
			<Stack.Screen name="Login" component={LoginPage} />
			<Stack.Screen name="SignUp" component={SignUpPage} />
		</Stack.Navigator>
	);
};

export default MyStack;
