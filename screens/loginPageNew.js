import React, { useState } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ImageBackground,
	TextInput,
	TextFieldImage,
	Image,
	TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import * as authActions from '../store/actions/auth';

import Spinner from 'react-native-loading-spinner-overlay';
import ButtonLGSN from '../components/buttonLGSN/buttonLGSN';
import InputField from '../components/inputField/inputField';
import ButtonFBGG from '../components/buttonFBGG/buttonFBGG';

const LoginPageNew = (props) => {
	//#region state
	const [ dataPost, setDataPost ] = useState({});
	//#region event
	const onHandleSignUpPress = () => {
		props.navigation.navigate('SignUp');
	};
	const onLoginPress = () => {
		console.log(dataPost);
		props.login(dataPost, props.navigation);
		// props.navigation.navigate('MainTab');
	};
	return (
		<View style={styles.container}>
			{/* <Text style={styles.mainLabel}>Login</Text> */}
			<Spinner visible={props.isLoading} textContent={'Loading...'} textStyle={{ color: '#FFF' }} />
			<Image source={require('../assets/images/users.png')} resizeMode="cover" style={styles.image} />
			<InputField
				label="Email:"
				placeholder="Enter email"
				isFocus={true}
				onChange={(value) => {
					setDataPost((prevS) => {
						return {
							...prevS,
							email: value
						};
					});
				}}
			/>
			<InputField
				label="Password:"
				placeholder="Enter password"
				onChange={(value) => {
					setDataPost((prevS) => {
						return {
							...prevS,
							password: value
						};
					});
				}}
				secureTextEntry
			/>
			<Text style={styles.forgotPstext}>Forgot password?</Text>
			<ButtonLGSN
				btnName="LOGIN"
				colorHex="#2590e9"
				textColor="white"
				style={{ marginTop: 20 }}
				onPress={onLoginPress}
			/>
			<Text style={{ marginTop: 30 }}>Or connect using</Text>
			<View style={styles.butonFBGGcontainer}>
				<ButtonFBGG
					type="ionicon"
					name="logo-facebook"
					color="white"
					btnName="Facebook"
					style={{ marginRight: 20, backgroundColor: '#517fa4' }}
				/>
				<ButtonFBGG
					type="ionicon"
					name="logo-google"
					btnName="Google"
					color="white"
					style={{ backgroundColor: '#f33' }}
				/>
			</View>
			<Text style={{ marginTop: 50, position: 'relative', top: 30 }}> Don't have an account?</Text>
			<TouchableOpacity onPress={onHandleSignUpPress} style={{ position: 'relative', top: 34 }}>
				<Text style={{ color: '#2590e9', fontWeight: 'bold' }}>Sign Up</Text>
			</TouchableOpacity>
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
	butonFBGGcontainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 10
	}
});

const mapDispatchToProp = (dispatch) => {
	return {
		login: (datatPost, navigation) => dispatch(authActions.authLogin(datatPost, navigation))
	};
};
const mapStateToProps = (state) => {
	return {
		isLoading: state.auth.loading
	};
};
export default connect(mapStateToProps, mapDispatchToProp)(LoginPageNew);
