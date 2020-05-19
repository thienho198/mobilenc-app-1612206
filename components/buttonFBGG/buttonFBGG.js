import React from 'react';
import { TouchableOpacity, Text,StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const ButtonFBGG = (props) => {
    const {type ,name, color } = props;
	return (
        <TouchableOpacity style={{...styles.main, ...props.style}}>
			<Icon type={type} name={name} color={color} style={{marginRight:8}}/>
			<Text style={{color:'white'}}>{props.btnName}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	main: {
		flexDirection: 'row',
        borderRadius: 8,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 4,
        width: 120
	}
});

export default ButtonFBGG;
