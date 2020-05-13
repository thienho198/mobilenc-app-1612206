import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import HeroPage from './screens/heroPage';

const fetchFonts = () => {
	return Font.loadAsync({
		'dancing-script': require('./assets/fonts/DancingScript-Regular.ttf'),
		'dancing-script-bold': require('./assets/fonts/DancingScript-Bold.ttf')
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
		<View style={styles.container}>
			<HeroPage />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
