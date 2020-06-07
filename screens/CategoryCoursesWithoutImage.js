import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import Course from '../components/course/Course';

const CategoryCoursesWithoutImage = (props) => {
	const dataCourses = [
		{
			uriImage: 'https://pluralsight.imgix.net/course-images/debugging-progressive-web-apps-v1.png?w=120',
			title: 'Debugging Progressive Web Apps',
			authorName: 'Deeksha Sharma',
			level: 'Beginner',
			createTime: 'Jun 3, 2020',
			duringTime: '1h 25m'
		},
		{
			uriImage: 'https://pluralsight.imgix.net/course-images/building-successful-change-strategy-v1.png?w=120',
			title: 'Building a Successful Change Strategy',
			authorName: ' Alice Meredith',
			level: 'Intermediate',
			createTime: 'Jun 5, 2020',
			duringTime: '28m'
		},
		{
			uriImage:
				'https://pluralsight.imgix.net/course-images/optimizing-personal-information-management-v1.png?w=120',
			title: 'Optimizing Personal Information Management: Your Guide to Never Searching Twice',
			authorName: ' Tommy van Schaik',
			level: 'Advanced',
			createTime: 'Jun 5, 2020',
			duringTime: '1h 6m'
		},
		{
			uriImage:
				'https://pluralsight.imgix.net/course-images/post-exploit-tasks-comptia-pentest-plus-v1.png?w=120',
			title: 'Post-Exploit Tasks for CompTIA PenTest+',
			authorName: 'Dale Meredith',
			level: 'Intermediate',
			createTime: 'Jun 5, 2020',
			duringTime: '1h 17m'
		},
		{
			uriImage:
				'https://pluralsight.imgix.net/course-images/exploring-preparing-data-bigquery-update-v1.png?w=120',
			title: 'Exploring and Preparing your Data with BigQuery',
			authorName: 'Google Cloud',
			level: 'Beginner',
			createTime: 'Jun 5, 2020',
			duringTime: '4h 36m'
		},
		{
			uriImage: 'https://pluralsight.imgix.net/course-images/becoming-change-leader-v1.png?w=120',
			title: 'Becoming a Change Leader',
			authorName: 'Alice Meredith',
			level: 'Intermediate',
			createTime: 'Jun 5, 2020',
			duringTime: '55m'
		},
		{
			uriImage: 'https://pluralsight.imgix.net/course-images/securing-data-secrets-aws-v1.png?w=120',
			title: 'Securing Data and Secrets on AWS',
			authorName: 'Danny Jessee',
			level: 'Intermediate',
			createTime: 'Jun 5, 2020',
			duringTime: '1h 19m'
		},
		{
			uriImage: 'https://pluralsight.imgix.net/course-images/java-api-websockets-introduction-v1.jpg?w=120',
			title: 'Introduction to the Java API for WebSockets',
			authorName: ' Kevin Jones',
			level: 'Intermediate',
			createTime: 'Jun 5, 2020',
			duringTime: '1h 53m'
		},
		{
			uriImage: 'https://pluralsight.imgix.net/course-images/raspberry-pi-server-home-v2.png?w=120',
			title: 'Raspberry Pi Home Server',
			authorName: 'Mel Grubb',
			level: 'Beginner',
			createTime: 'Jun 5, 2020',
			duringTime: '3h 17m'
		},
		{
			uriImage:
				'https://pluralsight.imgix.net/course-images/configuring-advanced-network-concepts-arubaos-switch-devices-v1.jpg?w=120',
			title: 'Configuring Advanced Network Concepts on ArubaOS-Switch Devices',
			authorName: 'Leigh Bogardis',
			level: 'Intermediate',
			createTime: 'Jun 5, 2020',
			duringTime: '1h 13m'
		},
		{
			uriImage: 'https://pluralsight.imgix.net/course-images/microsoft-project-tracking-resources-v1.png?w=120',
			title: 'Tracking Progress and Using Resources and Costs in Microsoft Project',
			authorName: 'Ben Howard',
			level: 'Intermediate',
			createTime: 'Jun 5, 2020',
			duringTime: '2h 37m'
		},
		{
			uriImage: 'https://pluralsight.imgix.net/course-images/raspberry-pi-server-home-v2.png?w=120',
			title: 'Raspberry Pi Home Server',
			authorName: 'Mel Grubb',
			level: 'Beginner',
			createTime: 'Jun 5, 2020',
			duringTime: '3h 17m'
		},
		{
			uriImage:
				'https://pluralsight.imgix.net/course-images/post-exploit-tasks-comptia-pentest-plus-v1.png?w=120',
			title: 'Post-Exploit Tasks for CompTIA PenTest+',
			authorName: 'Dale Meredith',
			level: 'Intermediate',
			createTime: 'Jun 5, 2020',
			duringTime: '1h 17m'
		}
	];
	return (
		<View style={styles.mainView}>
			<FlatList
				data={dataCourses}
				keyExtractor={(item, index) => index}
				renderItem={({ item }) => <Course {...item} tintColor="#2590e9" />}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

CategoryCoursesWithoutImage.navigationOptions = (props) => {
	return {
		headerTitle: props.route.params.CategoryCoursesWithoutImage.title
	};
};

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		backgroundColor: '#eef6fd'
	}
});

export default CategoryCoursesWithoutImage;