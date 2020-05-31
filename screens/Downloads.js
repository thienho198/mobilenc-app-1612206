import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const Downloads = (props) => {
	return (
		<View style={styles.mainView}>
			<Icon type="font-awesome-5" name="download" size={60} style={styles.iconDownload} color="#2590e9" />
			<Text style={{ ...styles.title, marginBottom: 5 }}>No downloads</Text>
			<Text>Courses you download will appear here</Text>
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
	iconDownload: {
		marginBottom: 20
	},
	title: {
		fontSize: 20
	}
});

export default Downloads;
