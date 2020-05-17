import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
const ButtonLGSN = (props) => {
	return (
		<TouchableOpacity style={{ ...styles.btn, backgroundColor: props.colorHex, ...props.style }}>
			<Text style={{ ...styles.text, color: props.textColor }}>{props.btnName}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	btn: {
		height: 40,
		width: 140,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 20,
		fontFamily: 'dancing-script'
	}
});

export default ButtonLGSN;
