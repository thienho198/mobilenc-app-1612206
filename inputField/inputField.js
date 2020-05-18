import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

const InputField = (props) => {
	const styleBorderContainer = {};
	if (props.isFocus) {
		styleBorderContainer.borderColor = '#2590e9';
		styleBorderContainer.borderWidth = 1;
	}
	return (
		<View style={{ ...styles.container, ...styleBorderContainer }}>
			<Text style={styles.label}>{props.label}</Text>
			<TextInput style={styles.field} placeholder={props.placeholder} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 13,
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 20,
		width: 300,
		paddingHorizontal: 20
	},
	label: {
		marginRight: 10,
		fontSize: 19,
		color: '#2590e9'
	},
	field: {
		flex: 1,
		borderBottomWidth: 1,
		borderColor: '#ddd',
		fontSize: 15
	}
});

export default InputField;
