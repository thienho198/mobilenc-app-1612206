import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
const ButtonLGSN = (props) => {
	return (
		<TouchableOpacity
			onPress={props.onPress}
			style={{ ...styles.btn, backgroundColor: props.colorHex, ...props.style }}
		>
			<Text style={{ ...styles.text, color: props.textColor }}>{props.btnName}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	btn: {
		height: 40,
		width: 160,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 17
	}
});

export default ButtonLGSN;
