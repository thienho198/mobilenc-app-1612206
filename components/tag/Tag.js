import React from 'react';
import { View, Text } from 'react-native';

const Tag = (props) => {
	const { content, style } = props;
	const color = props.color ? props.color : 'white';
	//#region render
	return (
		<View
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				height: 34,
				borderRadius: 32,
				backgroundColor: '#2590e9',
				paddingHorizontal: 12,
				paddingBottom: 2,
				...style
			}}
		>
			<Text style={{ color: color }}>{content}</Text>
		</View>
	);
};

export default Tag;
