import axios from '../../axios/myAxios';
import { Alert } from 'react-native';
import { AsyncStorage } from 'react-native';
//import axios from 'axios';

import * as actionTypes from './actionTypes';

const _storeData = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (error) {
		// Error saving data
	}
};
const _removeItem = async (key) => {
	try {
		await AsyncStorage.removeItem(key);
	} catch (error) {
		// Error saving data
	}
};
const _retrieveData = async (key) => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value !== null) {
			// We have data!!
			console.log(value);
		}
	} catch (error) {
		// Error retrieving data
	}
};

export const checkLogin = () => {
	return (dispatch) => {
		dispatch(authStart());
		axios
			.get('/user/me')
			.then((response) => {
				response.data.userInfo = response.data.payload;
				dispatch(authSuccess(response.data));
			})
			.catch((err) => {
				console.log(err);
				dispatch(authFaild());
			});
	};
};

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	};
};

export const authFaild = () => {
	return {
		type: actionTypes.AUTH_FAIL
	};
};

export const authSuccess = (data) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		token: data.token,
		authData: data.userInfo
	};
};

export const authLogout = () => {
	_removeItem('token');
	Alert.alert(
		'Thông báo',
		'Đăng xuất thành công',
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
	return {
		type: actionTypes.AUTH_LOGOUT
	};
};

export const authLogin = (data, navigation) => {
	return (dispatch) => {
		dispatch(authStart());
		axios
			.post('/user/login', data)
			.then((result) => {
				// myStorage.setItem('refreshToken', result.data.refreshToken);
				_storeData('token', result.data.token);
				navigation.navigate('Home');
				Alert.alert(
					'Thông báo',
					'Đăng nhập thành công',
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
				dispatch(authSuccess(result.data));
			})
			.catch((err) => {
				Alert.alert(
					'Thông báo',
					'Mật khẩu hoặc email không chính xác',
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
				dispatch(authFaild());
				console.log(err);
			});
	};
};
