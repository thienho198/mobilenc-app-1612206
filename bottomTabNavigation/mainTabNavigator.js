import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from '../navigatonStack/homeNavigator';
import BrowseNavigator from '../navigatonStack/BrowseNavigator';
import DownloadNavigator from '../navigatonStack/DownLoadNavigator';
import React from 'react';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

export default (mainTabNavigator = (props) => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={HomeNavigator}
				options={{
					tabBarIcon: (focused, color, size) => {
						console.log(focused);
						return <Icon type="font-awesome-5" name="home" size={28} color={focused.color} />;
					}
				}}
			/>
			<Tab.Screen
				name="Downloads"
				component={DownloadNavigator}
				options={{
					tabBarIcon: (focused, color, size) => {
						console.log(focused);
						return <Icon type="font-awesome-5" name="download" size={26} color={focused.color} />;
					}
				}}
			/>
			<Tab.Screen
				name="Browse"
				component={BrowseNavigator}
				options={{
					tabBarIcon: (focused, color, size) => {
						console.log(focused);
						return <Icon type="font-awesome-5" name="buromobelexperte" size={26} color={focused.color} />;
					}
				}}
			/>
		</Tab.Navigator>
	);
});
