import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Downloads from '../screens/Downloads';

const Stack = createStackNavigator();

const DownloadNavigator = (props) => {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerStyle: {
					backgroundColor: '#2590e9'
				},
				headerTitleStyle: {
					color: 'white'
				}
			}}
		>
			<Stack.Screen name="Downloads" component={Downloads} />
		</Stack.Navigator>
	);
};

export default DownloadNavigator;
