import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import SignupPage from './screens/signupPage';
import LoginPageNew from './screens/loginPageNew';

import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigatonStack/myNavigation';
import MainTabNavigator from './bottomTabNavigation/mainTabNavigator';

const fetchFonts = () => {
	return Font.loadAsync({
		'dancing-script': require('./assets/fonts/DancingScript-Regular.ttf'),
		'dancing-script-bold': require('./assets/fonts/DancingScript-Bold.ttf'),
		'work-sans': require('./assets/fonts/WorkSans-Regular.ttf')
	});
};
export default function App() {
	const [ isLoading, setIsLoading ] = useState(true);

	return isLoading ? (
		<AppLoading
			startAsync={fetchFonts}
			onFinish={() => {
				setIsLoading(false);
			}}
		/>
	) : (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>

		// <View style={styles.container}>
		// 	<SignupPage />
		// </View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'blue',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

//https://www.pinterest.com/pin/764767580460101452/
