import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import { View } from 'react-native';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import LoginPage from '../screens/loginPageNew';
const Stack = createStackNavigator();

const HomeNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="Home"
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
			<Stack.Screen name="Home" component={Home} options={Home.navigationOptions} />
			<Stack.Screen name="Profile" component={Profile} />
		</Stack.Navigator>
	);
};

export default HomeNavigator;
