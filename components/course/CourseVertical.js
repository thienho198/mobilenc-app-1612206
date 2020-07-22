import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const CourseVertical = (props) => {
	const { uriImage, title, authorName, level, createTime, duringTime, id } = props;
	//#region render
	console.log('qwe', id);
	return (
		<TouchableOpacity
			onPress={() => {
				props.navigation.navigate('PlayVideoPage', {
					PlayVideoPage: {
						id: id
					}
				});
			}}
		>
			<View style={styles.mainView}>
				<Image style={styles.image} source={{ uri: uriImage }} />
				<TouchableOpacity style={styles.icon_ellipsis_v}>
					<Icon type="font-awesome-5" name="ellipsis-v" color="white" size={16} />
				</TouchableOpacity>
				<View style={{ marginVertical: 5, flex: 1, marginLeft: 10 }}>
					<Text style={{ ...styles.textColor, fontWeight: 'bold', fontSize: 17, maxHeight: 45 }}>
						{title}
					</Text>
					<Text style={styles.textColor}>{authorName}</Text>
					<Text style={styles.textColor}>{`${level} - ${createTime} - ${duringTime}`}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	mainView: {
		width: 240,
		height: 200,
		position: 'relative',
		marginLeft: 10,
		backgroundColor: 'white'
	},
	icon_ellipsis_v: {
		position: 'absolute',
		top: 10,
		right: 10
	},
	image: {
		height: 100
	},
	textColor: {
		color: '#2590e9'
	}
});

export default CourseVertical;
