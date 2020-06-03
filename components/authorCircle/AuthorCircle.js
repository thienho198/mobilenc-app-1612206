import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const AuthorCircle = (props) => {
	const { authorName, uriImage, style } = props;

	//#region render
	return (
		<View style={{ ...styles.mainView, ...style }}>
			<Image
				style={styles.photoBounce}
				source={{
					uri: uriImage
				}}
			/>
			<Text style={{ textAlign: 'center' }}>{authorName}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	mainView: {
		alignItems: 'center',
		width: 70,
		height: 100
	},
	photoBounce: {
		height: 70,
		width: 70,
		borderRadius: 35
	}
});

export default AuthorCircle;
