import React from 'react';
import { Text, TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const InputField = (props) => {
	const styleBorderContainer = {};
	if (props.isFocus) {
		styleBorderContainer.borderColor = '#2590e9';
		styleBorderContainer.borderWidth = 1;
	}
	const isDatePicker = props.isDatePicker ? props.isDatePicker : false;
	const textInput = isDatePicker ? (
		
		<TouchableOpacity onPress={props.onHandleShowDTPicker} style={styles.field}>
			<View style={{flex: 1, justifyContent: 'flex-end', flexDirection:'row'}}>
	<Text style={{paddingTop: 4, margin:0,  flex: 1, textAlign: 'left'}}>{props.date}</Text>
				<Icon name='today' color='#E5008B' style={{ marginRight: 8 }} />
			</View>
		</TouchableOpacity>
	) : (
		<TextInput style={styles.field} placeholder={props.placeholder} />
	)
	return (
		<View style={{ ...styles.container, ...styleBorderContainer }}>
			<Text style={styles.label}>{props.label}</Text>
			{textInput}
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
		paddingHorizontal: 20,
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
