import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonLGSN from '../components/buttonLGSN/buttonLGSN';
const HeroPage = (props) => {
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
						position: 'relative'
					}}
				>
					<Text style={styles.textHeader}>Anonymous App Mobile</Text>
					<Text style={styles.textContent}>Let's do what you want to do!</Text>
					<View style={styles.buttonContainer}>
						<ButtonLGSN btnName="LOG IN" colorHex="white" style={{ marginRight: 20 }} />
						<ButtonLGSN btnName="SIGN UP" colorHex="#b22a52" textColor="white" />
					</View>
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
	textHeader: {
		color: 'white',
		textAlign: 'left',
		paddingLeft: 20,
		fontSize: 50,
		fontFamily: 'dancing-script-bold'
	},
	textContent: {
		color: 'white',

		paddingLeft: 70,
		fontSize: 25,
		fontFamily: 'dancing-script'
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		position: 'absolute',
		bottom: 30,
		width: '100%'
	}
});

export default HeroPage;
