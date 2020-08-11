import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import { View } from 'react-native';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import LoginPage from '../screens/loginPageNew';
import ChangepasswordPage from '../screens/ChangePassword';
import UpdateProfile from '../screens/UpdateProfile';
import PlayVideoPage from '../screens/PlayVideoPage';
import AuthorDetail from '../screens/AuthorDetail';
const Stack = createStackNavigator();

const SearchNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="Search"
			screenOptions={{
				headerStyle: {
					backgroundColor: '#2590e9'
				},
				headerTitleStyle: {
					color: 'white'
				},
				headerTintColor: 'white'
			}}
		>
			<Stack.Screen name="Search" component={Search} options={Search.navigationOptions} />
			<Stack.Screen name="Profile" component={Profile} />
			<Stack.Screen name="Course Detail" component={PlayVideoPage} />
			<Stack.Screen name="Instructor Detail" component={AuthorDetail} />
		</Stack.Navigator>
	);
};

export default SearchNavigator;
