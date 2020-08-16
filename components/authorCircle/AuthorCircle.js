import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AuthorCircle = (props) => {
	const { style, colorText } = props;
	const authorName = props['user.name'];
	const uriImage = props['user.avatar'];
	const authorEmail = props['user.email'];
	const authorMajor = props['major'];
	const authorPhoneNumber = props['user.phone'];
	const authorIntro = props['intro'];
	const authorSkills = props['skills'];
	//#region render
	return (
		<TouchableOpacity
			style={{ ...styles.mainView, ...style }}
			onPress={() => {
				props.navigation.navigate('Instructor Detail', {
					AuthorDetail: {
						authorName: authorName,
						authorEmail: authorEmail,
						authorMajor: authorMajor,
						authorPhoneNumber: authorPhoneNumber,
						authorIntro: authorIntro,
						authorSkills: authorSkills,
						authorPhoto: uriImage
					}
				});
			}}
		>
			<Image
				style={styles.photoBounce}
				source={{
					uri: uriImage
				}}
			/>
			<Text style={{ textAlign: 'center', color: colorText }}>{authorName}</Text>
		</TouchableOpacity>
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
