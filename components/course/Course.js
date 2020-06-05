import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

import { Icon } from 'react-native-elements';
const Course = (props) => {
	const { uriImage, title, authorName, level, createTime, duringTime } = props;
	//#region render
	return (
		<View>
			<View style={styles.mainView}>
				<Image style={{ margin: 10, width: 50, height: 50 }} source={{ uri: uriImage }} />
				<View style={{ marginVertical: 5, flex: 1 }}>
					<Text style={styles.whiteColor}>{title}</Text>
					<Text style={styles.whiteColor}>{authorName}</Text>
					<Text style={styles.whiteColor}>{`${level} - ${createTime} - ${duringTime}`}</Text>
				</View>
				<TouchableOpacity style={{ marginRight: 10, width: 10, justifyContent: 'center' }} onPress={() => {}}>
					<Icon type="font-awesome-5" name="ellipsis-v" color="white" size={17} />
				</TouchableOpacity>
			</View>
			<View style={{ height: 1, backgroundColor: 'white', marginHorizontal: 10 }} />
		</View>
	);
};

const styles = StyleSheet.create({
	mainView: {
		flexDirection: 'row'
	},
	whiteColor: {
		color: 'white'
	}
});

export default Course;
