import React, { useState } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ImageBackground,
	TextInput,
	TextFieldImage,
	Image,
	TouchableOpacity,
	Alert
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import Spinner from 'react-native-loading-spinner-overlay';

import ButtonLGSN from '../components/buttonLGSN/buttonLGSN';
import InputField from '../components/inputField/inputField';
import axios from '../axios/myAxios';

const SignupPage = (props) => {
	const [ date, setDate ] = useState('');
	const [ show, setShow ] = useState(false);
	const [ dataPost, setDataPost ] = useState({});
	const [ isLoading, setIsLoading ] = useState(false);
	const toggleDateTimePicker = () => {
		setShow(true);
	};
	const onDtpickerChange = (event, selectedDate) => {
		setShow(false);
		setDate(moment(selectedDate).format('MMM Do YY'));
		//console.log(selectedDate);
	};
	const onHandleLoginPress = () => {
		props.navigation.goBack();
	};
	return (
		<View style={styles.container}>
			{/* <Text style={styles.mainLabel}>SIGN UP</Text> */}
			<Spinner visible={isLoading} textContent={'Loading...'} textStyle={{ color: '#FFF' }} />
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
				secureTextEntry={true}
			/>
			<InputField
				label="Cofirm password:"
				placeholder=""
				onChange={(value) => {
					setDataPost((prevS) => {
						return {
							...prevS,
							confirmPassword: value
						};
					});
				}}
				secureTextEntry={true}
			/>
			<InputField
				label="Name:"
				placeholder="Enter your name"
				onChange={(value) => {
					setDataPost((prevS) => {
						return {
							...prevS,
							username: value
						};
					});
				}}
			/>
			<InputField
				label="Phone:"
				placeholder="Enter your phone number"
				onChange={(value) => {
					setDataPost((prevS) => {
						return {
							...prevS,
							phone: value
						};
					});
				}}
			/>
			{/* <InputField
				label="Birth day:"
				placeholder="Enter your name"
				onHandleShowDTPicker={toggleDateTimePicker}
				isDatePicker
				date={date}
			/>
			{show ? (
				<DateTimePicker
					testID="dateTimePicker"
					timeZoneOffsetInMinutes={0}
					value={new Date(2020, 5, 20)}
					mode={'date'}
					is24Hour={true}
					display="default"
					onChange={onDtpickerChange}
				/>
			) : null} */}

			<ButtonLGSN
				btnName="SIGN UP"
				colorHex="#2590e9"
				textColor="white"
				style={{ marginTop: 20 }}
				onPress={() => {
					if (dataPost.password === dataPost.confirmPassword) {
						setIsLoading(true);
						axios
							.post('/user/register', dataPost)
							.then((response) => {
								console.log('res', response.data);
								setIsLoading(false);
								// axios.post('/user/send-activate-email', { email: dataPost.email });
								props.navigation.goBack();
								Alert.alert(
									'Thông báo',
									'Đăng ký thành công',
									[
										{
											text: 'Cancel',
											onPress: () => console.log('Cancel Pressed'),
											style: 'cancel'
										},
										{ text: 'OK', onPress: () => console.log('OK Pressed') }
									],
									{ cancelable: false }
								);
							})
							.catch((error) => {
								setIsLoading(false);
								Alert.alert(
									'Thông báo',
									'Email hoặc số điện thoại đã tồn tại',
									[
										{
											text: 'Cancel',
											onPress: () => console.log('Cancel Pressed'),
											style: 'cancel'
										},
										{ text: 'OK', onPress: () => console.log('OK Pressed') }
									],
									{ cancelable: false }
								);
								console.log(error);
							});
					} else {
						Alert.alert(
							'Thông báo',
							'Mật khẩu xác nhận không khớp',
							[
								{
									text: 'Cancel',
									onPress: () => console.log('Cancel Pressed'),
									style: 'cancel'
								},
								{ text: 'OK', onPress: () => console.log('OK Pressed') }
							],
							{ cancelable: false }
						);
					}
				}}
			/>

			<Text style={{ marginTop: 50, position: 'relative', top: 71 }}>Already have an account?</Text>
			<TouchableOpacity onPress={onHandleLoginPress} style={{ position: 'relative', top: 75 }}>
				<Text style={{ color: '#2590e9', fontWeight: 'bold' }}>Login here</Text>
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

	mainLabel: {
		position: 'absolute',
		left: 15,
		top: 30,
		color: '#2590e9',
		// /fontFamily: 'work-sans',
		fontSize: 30
	}
});

export default SignupPage;
