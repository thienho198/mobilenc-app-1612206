import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import ButtonLGSN from '../components/buttonLGSN/buttonLGSN';
import { connect } from 'react-redux';
import * as actionAuth from '../store/actions/auth';

const Profile = (props) => {
	return props.isAuthenticated ? (
		<View style={styles.mainViewLogged}>
			<View style={styles.userInfoArea}>
				<Image
					source={{
						uri: props.authData.avatar
					}}
					resizeMode="cover"
					style={styles.image}
				/>
				<View style={styles.userInfoTextArea}>
					{/* <Text style={{ fontSize: 19 }}>{props.authData.name}</Text> */}
					<Text style={{ fontSize: 18, fontWeight: 'bold' }}>{props.authData.email}</Text>
					<Text style={{ fontSize: 14 }}>{props.authData.type}</Text>
					<View style={{ flexDirection: 'row', marginTop: 2 }}>
						<TouchableOpacity
							style={{
								backgroundColor: '#20c997',
								borderRadius: 8,
								padding: 4,
								marginTop: 4,
								justifyContent: 'center',
								marginRight: 10,
								paddingHorizontal: 10
							}}
						>
							<Text style={{ color: 'white' }}>Change Password</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								backgroundColor: '#fd7e14',
								borderRadius: 8,
								padding: 4,
								marginTop: 4,
								justifyContent: 'center',
								paddingHorizontal: 10
							}}
							onPress={() => props.logout()}
						>
							<Text style={{ color: 'white' }}>Logout</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	) : (
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
	mainViewLogged: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#eef6fd'
	},
	userInfoArea: {
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center'
	},
	image: {
		height: 80,
		width: 80,
		marginTop: 20,
		marginLeft: 20,
		borderRadius: 40
	},
	userInfoTextArea: {
		flex: 1,
		marginLeft: 20,
		marginTop: 13,
		alignItems: 'flex-start'
	},
	titleMain: {
		fontSize: 16
	}
});

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.isAuthenticated,
		authData: state.auth.authData
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(actionAuth.authLogout())
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
