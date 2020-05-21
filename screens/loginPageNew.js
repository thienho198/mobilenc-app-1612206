import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, TextFieldImage, Image, TouchableOpacity } from 'react-native';

import ButtonLGSN from '../components/buttonLGSN/buttonLGSN';
import InputField from '../components/inputField/inputField';
import ButtonFBGG from '../components/buttonFBGG/buttonFBGG';

const LoginPageNew = (props) => {

	//#region event
	const onHandleSignUpPress = ()=>{
		props.navigation.navigate('SignUp')
	}
	return (
		<View style={styles.container}>
			<Text style={styles.mainLabel}>Login</Text>
			<Image source={require('../assets/images/users.png')} resizeMode="cover" style={styles.image} />
			<InputField label="Email:" placeholder="Enter email" isFocus={true} />
			<InputField label="Password:" placeholder="Enter password" />
			<Text style={styles.forgotPstext}>Forgot password?</Text>
			<ButtonLGSN btnName="LOGIN" colorHex="#2590e9" textColor="white" style={{ marginTop: 20 }} />
			<Text style={{ marginTop: 30 }}>Or connect using</Text>
			<View style={styles.butonFBGGcontainer}>
			<ButtonFBGG type='ionicon' name='logo-facebook' color='white' btnName='Facebook' style={{marginRight: 20, backgroundColor: '#517fa4'}}/>
			<ButtonFBGG type='ionicon' name='logo-google' btnName='Google' color='white'style={{ backgroundColor:'#f33'}}/>
			</View>
			<Text style={{marginTop: 50, position: 'relative' , top: 50}}> Don't have an account?</Text> 
			<TouchableOpacity onPress={onHandleSignUpPress} style={{ position: 'relative' , top: 54}}><Text style={{color:'#2590e9', fontWeight: 'bold'}}>Sign Up</Text></TouchableOpacity>
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
		color: '#2590e9',
		// /fontFamily: 'work-sans',
		fontSize: 30
	},
	butonFBGGcontainer:{
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 10
	}
});


	



export default LoginPageNew;
