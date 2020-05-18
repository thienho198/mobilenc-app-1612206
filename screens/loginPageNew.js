import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, TextFieldImage, Image } from 'react-native';

import ButtonLGSN from '../buttonLGSN/buttonLGSN';
import InputField from '../inputField/inputField';

const LoginPageNew = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.mainLabel}>Login</Text>
			<Image source={require('../assets/images/users.png')} resizeMode="cover" style={styles.image} />
			<InputField label="Email:" placeholder="Enter email" isFocus={true} />
			<InputField label="Password:" placeholder="Enter password" />
			<Text style={styles.forgotPstext}>Forgot password?</Text>
			<ButtonLGSN btnName="LOGIN" colorHex="#2590e9" textColor="white" style={{ marginTop: 20 }} />
			<Text style={{ marginTop: 30 }}>Or connect using</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#eef6fd',
		width: '100%',
		position: 'relative'
	},
	image: {
		width: 150,
		height: 150,
		paddingLeft: 0
		//height: '30%'
	},
	forgotPstext: {
		marginTop: 5,
		fontSize: 13,
		width: 300,
		textAlign: 'right'
	},
	mainLabel: {
		position: 'absolute',
		left: 15,
		top: 30,
		color: 'black',
		// /fontFamily: 'work-sans',
		fontSize: 30
	}
});

export default LoginPageNew;
