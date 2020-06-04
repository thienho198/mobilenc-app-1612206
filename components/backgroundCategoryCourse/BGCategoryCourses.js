import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet, Text, ScrollView, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { vh } from 'react-native-css-vh-vw';

const BGCategoryCourses = (props) => {
	const { uriImage, percentHeightImage } = props;

	//#region render
	return (
		// <LinearGradient
		// 	colors={[ 'rgba(255,255,255, 0.2)', 'rgba(19, 109, 184, 0.9)' ]}
		// 	style={{ flex: 1 }}
		// 	locations={[ 0, 0.2 ]}
		// >
		<ScrollView style={styles.mainView} contentContainerStyle={{}}>
			<LinearGradient
				colors={[ 'rgba(255,255,255, 0.2)', 'rgba(19, 109, 184, 1)' ]}
				locations={[ 0, 0.4 ]}
				style={{
					height: vh(30),
					width: '100%',
					position: 'absolute',
					top: 0,
					left: 0
				}}
			>
				<Image
					source={{ uri: uriImage }}
					style={{
						width: '100%',
						height: '100%',
						opacity: 0.1
					}}
				/>
			</LinearGradient>
			<View
				style={{
					height: vh(30),
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Text
					style={{
						textAlign: 'center',
						color: 'white',
						fontSize: 35,
						width: 200,
						fontWeight: 'bold'
					}}
				>
					NEW RELEASES
				</Text>
			</View>
			<View style={{ backgroundColor: 'rgba(19, 109, 184, 1)' }}>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCDEF</Text>
				<Text>ABCD43354654654EF</Text>
			</View>
		</ScrollView>
		// </LinearGradient>
	);
};

const styles = StyleSheet.create({
	mainView: {
		flex: 1
	}
});

export default BGCategoryCourses;
