import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const Home = (props) => {
	return (
		<View style={styles.mainView}>
			<Text style={styles.titleMain}>Let's get you started</Text>
			<Icon type="material" name="dns" size={40} color="#2590e9" />
			<Text style={{ marginBottom: 20 }}>Browse new and popular courses</Text>
			<Icon type="material" name="search" size={40} color="#2590e9" />
			<Text>Search the library</Text>
		</View>
	);
};

Home.navigationOptions = (props) => {
	return {
		headerRight: () => {
			return (
				<View style={styles.headerRight}>
					<TouchableOpacity
						onPress={() => {
							props.navigation.navigate('Profile');
						}}
						style={{ marginRight: 20 }}
					>
						<Icon type="font-awesome-5" name="user-circle" color="white" />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => {}}>
						<Icon type="font-awesome-5" name="ellipsis-v" color="white" size={19} />
					</TouchableOpacity>
				</View>
			);
		}
	};
};

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#eef6fd'
	},
	titleMain: {
		fontSize: 25,
		marginBottom: 40
	},
	headerRight: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingRight: 10
	}
});

export default Home;
