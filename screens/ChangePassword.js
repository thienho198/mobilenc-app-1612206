import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import InputField from '../components/inputField/inputField';
import ButtonLGSN from '../components/buttonLGSN/buttonLGSN';
import axios from '../axios/myAxios';
import { connect } from 'react-redux';
import * as authActions from '../store/actions/auth';

const ChangePassword = (props) => {
	const [ dataPost, setDataPost ] = useState({});

	return (
		<View style={styles.container}>
			<InputField
				label="Old Password:"
				placeholder="Old password"
				onChange={(value) => {
					setDataPost((prevS) => {
						return {
							...prevS,
							oldPass: value
						};
					});
				}}
				secureTextEntry
			/>
			<InputField
				label="New Password:"
				placeholder="New password"
				onChange={(value) => {
					setDataPost((prevS) => {
						return {
							...prevS,
							newPass: value
						};
					});
				}}
				secureTextEntry
			/>
			<InputField
				label="Cofirm password:"
				placeholder=""
				onChange={(value) => {
					setDataPost((prevS) => {
						return {
							...prevS,
							confirmPass: value
						};
					});
				}}
				secureTextEntry={true}
			/>
			<ButtonLGSN
				btnName="Change password"
				colorHex="#2590e9"
				textColor="white"
				style={{ marginTop: 20 }}
				onPress={() => {
					if (!dataPost.newPass || !dataPost.oldPass || !dataPost.confirmPass) {
						Alert.alert(
							'Thông báo',
							'Chưa điền đầy đủ thông tin',
							[ { text: 'OK', onPress: () => console.log('OK Pressed') } ],
							{ cancelable: false }
						);
					} else if (dataPost.newPass !== dataPost.confirmPass) {
						Alert.alert(
							'Thông báo',
							'Mật khẩu xác nhận không khớp',
							[ { text: 'OK', onPress: () => console.log('OK Pressed') } ],
							{ cancelable: false }
						);
					} else {
						dataPost.id = props.id;
						axios
							.post(`/user/change-password`, dataPost)
							.then((response) => {
								Alert.alert(
									'Thông báo',
									'Đổi mật khẩu thành công',
									[ { text: 'OK', onPress: () => console.log('OK Pressed') } ],
									{ cancelable: false }
								);
								props.navigation.goBack();
							})
							.catch((error) => {
								console.log(error);
								Alert.alert(
									'Thông báo',
									'Lỗi hệ thống',
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

const mapStateToProps = (state) => {
	return {
		id: state.auth.authData.id
	};
};
export default connect(mapStateToProps)(ChangePassword);
