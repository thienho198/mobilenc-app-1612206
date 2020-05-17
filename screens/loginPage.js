import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import ButtonLGSN from '../buttonLGSN/buttonLGSN';
import InputField from '../inputField/inputField';

const LoginPage = (props) => {
	return (
		<ImageBackground
			source={require('../assets/images/image-background2.jpg')
			// uri:
			//   "https://images.unsplash.com/photo-1589201968286-dfb786c4f846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80",
			}
			style={styles.image}
		>
			<LinearGradient
				colors={[ 'rgba(148, 187, 233, 0.7)', 'rgba(242, 101, 155, 0.9)' ]}
				style={styles.background}
			>
				<View
					style={{
						flex: 1,
						backgroundColor: 'rgba(0,0,0,0.3)',
						justifyContent: 'center',
						alignItems: 'center',
						position: 'relative'
					}}
				>
					<Text style={styles.textLabel}>Login</Text>
					<View style={styles.inputArea}>
						<InputField label="Email:" placeholder="Type your email" />
						<InputField label="Password:" placeholder="Type your password " />
						{/* <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} /> */}
					</View>
					<ButtonLGSN btnName="LOG IN" colorHex="#b22a52" style={{ marginTop: 10 }} textColor="white" />
				</View>
			</LinearGradient>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	image: {
		flex: 1,
		resizeMode: 'cover',
		width: '100%'
	},
	background: {
		flex: 1
	},
	inputArea: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		width: 300,
		backgroundColor: 'white',
		borderRadius: 5
	},
	textLabel: {
		position: 'absolute',
		left: 15,
		top: 20,
		color: 'white',
		fontFamily: 'dancing-script',
		fontSize: 40
	}
});

export default LoginPage;
