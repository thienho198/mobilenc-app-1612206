import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

const InputField = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{props.label}</Text>
			<TextInput style={styles.field} placeholder={props.placeholder} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 8
	},
	label: {
		marginRight: 5,
		width: 86,
		fontFamily: 'dancing-script',
		fontSize: 23
	},
	field: {
		flex: 1,
		borderBottomWidth: 1,
		borderColor: '#ddd',

		fontSize: 15
	}
});

export default InputField;
