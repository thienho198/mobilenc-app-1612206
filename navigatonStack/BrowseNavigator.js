import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import { View } from 'react-native';
import Browse from '../screens/Browse';
import Profile from '../screens/Profile';
const Stack = createStackNavigator();

const HomeNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="Browse"
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
			<Stack.Screen name="Browse" component={Browse} options={Browse.navigationOptions} />
			<Stack.Screen name="Profile" component={Profile} />
		</Stack.Navigator>
	);
};

export default HomeNavigator;
