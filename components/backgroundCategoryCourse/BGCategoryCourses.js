import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet, Text, ScrollView, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { vh } from 'react-native-css-vh-vw';

const BGCategoryCourses = (props) => {
	const { uriImage, percentHeightImage, courseName } = props.route.params.CategoryCourses;

	//#region render
	return (
		// <LinearGradient
		// 	colors={[ 'rgba(255,255,255, 0.2)', 'rgba(19, 109, 184, 0.9)' ]}
		// 	style={{ flex: 1 }}
		// 	locations={[ 0, 0.2 ]}
		// >
		<ScrollView style={styles.mainView} contentContainerStyle={{}}>
			<LinearGradient
				colors={[ 'rgba(255,255,255, 0.2)', 'rgba(37, 144, 233, 1)' ]}
				locations={[ 0, 0.5 ]}
				style={{
					height: vh(percentHeightImage),
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
						opacity: 0.2
					}}
				/>
			</LinearGradient>
			<TouchableOpacity
				style={{ position: 'absolute', top: 30, left: 10 }}
				onPress={() => {
					props.navigation.goBack();
				}}
			>
				<Icon type="font-awesome-5" name="arrow-left" color="white" />
			</TouchableOpacity>
			<View
				style={{
					height: vh(percentHeightImage),
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Text
					style={{
						textAlign: 'center',
						color: 'white',
						fontSize: 35,
						width: 250,
						fontWeight: 'bold'
					}}
				>
					{courseName}
				</Text>
			</View>
			<View style={{ backgroundColor: 'rgba(37, 144, 233, 1)' }}>{props.children}</View>
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
