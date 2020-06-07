import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

import { Icon } from 'react-native-elements';
const Course = (props) => {
	const { uriImage, title, authorName, level, createTime, duringTime, tintColor } = props;
	//#region render
	return (
		<View>
			<View style={styles.mainView}>
				<Image style={{ margin: 10, width: 50, height: 50 }} source={{ uri: uriImage }} />
				<View style={{ marginVertical: 5, flex: 1 }}>
					<Text
						style={{ ...styles.whiteColor, fontWeight: 'bold', fontSize: 17, color: tintColor || 'white' }}
					>
						{title}
					</Text>
					<Text style={{ color: tintColor || 'white' }}>{authorName}</Text>
					<Text style={{ color: tintColor || 'white' }}>{`${level} - ${createTime} - ${duringTime}`}</Text>
				</View>
				<TouchableOpacity style={{ marginRight: 10, width: 10, justifyContent: 'center' }} onPress={() => {}}>
					<Icon type="font-awesome-5" name="ellipsis-v" color="white" size={17} />
				</TouchableOpacity>
			</View>
			<View style={{ height: 1, backgroundColor: tintColor || 'white', marginHorizontal: 10 }} />
		</View>
	);
};

const styles = StyleSheet.create({
	mainView: {
		flexDirection: 'row'
	}
});

export default Course;
