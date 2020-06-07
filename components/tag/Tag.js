import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Tag = (props) => {
	const { content, style } = props;
	const color = props.color ? props.color : 'white';
	//#region render
	return (
		<TouchableOpacity
			onPress={props.onPress}
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				height: 34,
				borderRadius: 999,
				backgroundColor: '#2590e9',
				paddingHorizontal: 12,
				paddingBottom: 2,
				...style
			}}
		>
			<Text style={{ color: color }}>{content}</Text>
		</TouchableOpacity>
	);
};

export default Tag;
