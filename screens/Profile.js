import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonLGSN from '../components/buttonLGSN/buttonLGSN';

const Profile = (props) => {
	return (
		<View style={styles.mainView}>
			<Text style={styles.titleMain}>Please login to view your profile</Text>
			<ButtonLGSN
				btnName="LOGIN"
				colorHex="#2590e9"
				textColor="white"
				style={{ marginTop: 14 }}
				onPress={() => {
					props.navigation.navigate('Login');
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#eef6fd'
	},
	titleMain: {
		fontSize: 16
	}
});

export default Profile;
