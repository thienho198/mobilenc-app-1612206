import React, { useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, TextFieldImage, Image, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'

import ButtonLGSN from '../components/buttonLGSN/buttonLGSN';
import InputField from '../components/inputField/inputField';

const SignupPage = (props) => {
	const [ date, setDate ] = useState('');
	const [ show, setShow ] = useState(false);
	const toggleDateTimePicker = () => {
		setShow(true);
	};
	const onDtpickerChange = (event, selectedDate) => {
		setShow(false);
		setDate(moment(selectedDate).format("MMM Do YY"));
		//console.log(selectedDate);
	};
	const onHandleLoginPress = ()=>{
		props.navigation.goBack();
	}
	return (
		<View style={styles.container}>
			<Text style={styles.mainLabel}>SIGN UP</Text>

			<InputField label="Email:" placeholder="Enter email" isFocus={true} />
			<InputField label="Password:" placeholder="Enter password" />
			<InputField label="Cofirm password:" placeholder="" />
			<InputField label="Name:" placeholder="Enter your name" />
			<InputField label="Birth day:" placeholder="Enter your name" onHandleShowDTPicker={toggleDateTimePicker} isDatePicker date={date} />
			{show ? (
				<DateTimePicker
					testID="dateTimePicker"
					timeZoneOffsetInMinutes={0}
					value={new Date(2020, 5, 20)}
					mode={'date'}
					is24Hour={true}
					display="default"
					onChange={onDtpickerChange}
				/>
			) : null}

			<ButtonLGSN btnName="SIGN UP" colorHex="#2590e9" textColor="white" style={{ marginTop: 20 }} />

			<Text style={{ marginTop: 50, position: 'relative', top: 86 }}>
				Already have an account? 
			</Text>
			<TouchableOpacity onPress={onHandleLoginPress} style={{position: 'relative', top: 90 }}><Text style={{ color: '#2590e9', fontWeight: 'bold' }}>Login here</Text></TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#eef6fd',
		width: '100%',
		position: 'relative'
	},

	mainLabel: {
		position: 'absolute',
		left: 15,
		top: 30,
		color: '#2590e9',
		// /fontFamily: 'work-sans',
		fontSize: 30
	}
});

export default SignupPage;
