import React from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity } from 'react-native';

const categoryDisplay = (props) => {
	const { uri, localPath, children, width, height, style } = props; //all required uri || localPath

	//#region render
	const propsImageBackground = uri ? { uri: uri } : null;
	return (
		<TouchableOpacity onPress={props.onPress}>
			<ImageBackground source={propsImageBackground} style={{ width: width, height: height, ...style }}>
				<View style={styles.backgroundView}>{children}</View>
			</ImageBackground>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	backgroundView: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.3)',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative'
	}
});

export default categoryDisplay;
