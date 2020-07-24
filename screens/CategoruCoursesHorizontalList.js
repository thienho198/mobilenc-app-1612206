import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

import Course from '../components/course/Course';
import BGCategoryCourses from '../components/backgroundCategoryCourse/BGCategoryCourses';
import Tag from '../components/tag/Tag';
import AuthorCircle from '../components/authorCircle/AuthorCircle';
import CoursesListVertical from '../components/course/CoursesListVertical';
import axios from '../axios/myAxios';
import Spinner from 'react-native-loading-spinner-overlay';

const CategoruCoursesHorizontalList = (props) => {
	const dataProps = props.route.params.CategoruCoursesHorizontalList;
	// console.log('haha', props.route);
	const [ listCourses, setListCourses ] = useState([]);
	const [ listInstructors, setListInstructors ] = useState([]);
	const [ loading, setIsLoading ] = useState(true);
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
	const skills = [
		'Network Infrastucture',
		'Server Infrastructure',
		'Clound Computing',
		'Virtualization',
		'Infomation Security',
		'Windows Server',
		'Automation',
		'Endpoint Management',
		'DevOps',
		'Operating Systems',
		'Application Deployment',
		'It Fundamentals',
		'Penetration Testing',
		'PowerShell',
		'Microsoft Azure',
		'Database Administration',
		'AWS'
	];
	const dataAuthors = [
		{
			uriImage: 'https://www.fakepersongenerator.com/Face/female/female20151024386876251.jpg',
			authorName: 'Felica G Frank'
		},
		{
			uriImage: 'https://www.fakepersongenerator.com/Face/male/male1085779685638.jpg',
			authorName: 'Kenneth T Sutton'
		},
		{
			uriImage: 'https://www.fakepersongenerator.com/Face/female/female20161025087137757.jpg',
			authorName: 'Anna C Anaya'
		},
		{
			uriImage: 'https://www.fakepersongenerator.com/Face/female/female20151024249172608.jpg',
			authorName: 'Brenda M Wynne'
		},
		{
			uriImage: 'https://www.fakepersongenerator.com/Face/male/male20171085984168854.jpg',
			authorName: 'Michael C Williams'
		},
		{
			uriImage: 'https://www.fakepersongenerator.com/Face/male/male20171084062504120.jpg',
			authorName: 'Chad E Cote'
		},
		{
			uriImage: 'https://www.fakepersongenerator.com/Face/female/female1022402225678.jpg',
			authorName: 'Jennifer T Jones'
		}
	];
	const SkillArea = () => {
		return (
			<View style={{ height: 65, marginTop: 20 }}>
				<Text style={{ marginLeft: 10, marginBottom: 10, color: 'white' }}>
					{dataProps.categoryName + ' Skills'}
				</Text>
				<FlatList
					horizontal={true}
					data={skills}
					keyExtractor={(item, index) => index}
					renderItem={({ item, index }) =>
						index === 0 ? (
							<Tag
								content={item}
								style={{ marginRight: 5, backgroundColor: 'white', marginLeft: 10 }}
								color="#2590e9"
							/>
						) : (
							<Tag content={item} style={{ marginRight: 5, backgroundColor: 'white' }} color="#2590e9" />
						)}
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		);
	};
	const topAuthor = () => {
		return (
			<View style={{ height: 140, marginTop: 10 }}>
				<Text style={{ marginLeft: 10, marginBottom: 10, fontWeight: 'bold', color: 'white' }}>
					{`Top Authors in ${dataProps.categoryName}`}{' '}
				</Text>
				<FlatList
					data={listInstructors}
					horizontal={true}
					renderItem={({ item }) => <AuthorCircle {...item} style={{ marginRight: 10 }} colorText="white" />}
					keyExtractor={(item, index) => index}
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		);
	};
	const newIn = () => {
		return <CoursesListVertical dataList={listCourses} listTitle={`New in ${dataProps.categoryName}`} {...props} />;
	};
	const trendingIn = () => {
		return (
			<CoursesListVertical
				dataList={listCourses}
				listTitle={`Trending in ${dataProps.categoryName}`}
				{...props}
			/>
		);
	};
	useEffect(() => {
		console.log('id course', dataProps.idCourse);
		axios
			.post(`/course/search`, {
				keyword: '',
				opt: {
					category: [ dataProps.idCourse ]
				},
				limit: 20,
				offset: 0
			})
			.then((response) => {
				setIsLoading(false);
				let listCourse = response.data.payload.rows;
				console.log(listCourse);
				listCourse = listCourse.map((course, index) => {
					course.duringTime = course.totalHours.toString() + 'h';
					course.uriImage = course.imageUrl;
					course.createTime = moment(course.createdAt || course.updatedAt).format('MMM Do YY');
					return { ...dataCourses[index], ...course };
				});
				setListCourses(listCourse);
			});
		axios.get('/instructor').then((response) => {
			setIsLoading(false);
			let listInstructors = response.data.payload;

			listInstructors = listInstructors.map((instructor, index) => {
				instructor.authorName = instructor['user.name'];
				instructor.uriImage = instructor['user.avatar'];
				return { ...dataAuthors[index], ...instructor };
			});
			setListInstructors(listInstructors);
		});
	}, []);
	return (
		<React.Fragment>
			<Spinner visible={loading} textContent={'Loading...'} textStyle={{ color: '#FFF' }} />

			<BGCategoryCourses
				// uriImage="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
				// percentHeightImage={30}
				{...dataProps}
				goBack={() => {
					props.navigation.goBack();
				}}
			>
				{SkillArea()}
				{newIn()}
				{trendingIn()}
				{topAuthor()}

				{/* {dataCourses.map((item, index) => <Course key={index} {...item} />)} */}

				{/* <Course
				uriImage="https://pluralsight.imgix.net/course-images/debugging-progressive-web-apps-v1.png?w=120"
				title="Debugging Progressive Web Apps"
				authorName="Deeksha Sharma"
				level="Beginner"
				createTime="Jun 3, 2020"
				duringTime="1h 25m"
			/> */}
			</BGCategoryCourses>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		id: state.auth.authData.id
	};
};
export default connect(mapStateToProps)(CategoruCoursesHorizontalList);
