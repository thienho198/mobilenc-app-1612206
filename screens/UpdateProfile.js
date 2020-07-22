import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import InputField from '../components/inputField/inputField';
import ButtonLGSN from '../components/buttonLGSN/buttonLGSN';
import axios from '../axios/myAxios';
import { connect } from 'react-redux';
import * as authActions from '../store/actions/auth';

const UpdateProfile = (props) => {
	const [ dataPost, setDataPost ] = useState({
		avatar:
			'https://images.unsplash.com/photo-1594011452783-d26d894c9fa7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
	});

	return (
		<View style={styles.container}>
			<InputField
				label="Name:"
				placeholder="Enter your name"
				onChange={(value) => {
					setDataPost((prevS) => {
						return {
							...prevS,
							name: value
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
			<ButtonLGSN
				btnName="Update profile"
				colorHex="#2590e9"
				textColor="white"
				style={{ marginTop: 20 }}
				onPress={() => {
					if (!dataPost.phone || !dataPost.name) {
						Alert.alert(
							'Thông báo',
							'Chưa điền đầy đủ thông tin',
							[ { text: 'OK', onPress: () => console.log('OK Pressed') } ],
							{ cancelable: false }
						);
					} else {
						axios
							.put('/user/update-profile', dataPost)
							.then((res) => {
								props.checkLogin();
								Alert.alert(
									'Thông báo',
									'Cập nhật profile thành công',
									[ { text: 'OK', onPress: () => console.log('OK Pressed') } ],
									{ cancelable: false }
								);
							})
							.catch((error) => {
								console.log(error);
								Alert.alert(
									'Thông báo',
									'Có lỗi xảy ra',
									[ { text: 'OK', onPress: () => console.log('OK Pressed') } ],
									{ cancelable: false }
								);
							});
					}
				}}
			/>
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
	}
});

const mapDispatchToProps = (dispatch) => {
	return {
		checkLogin: () => dispatch(authActions.checkLogin())
	};
};

export default connect(null, mapDispatchToProps)(UpdateProfile);
