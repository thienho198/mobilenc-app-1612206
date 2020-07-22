import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, FlatList, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import ButtonLGSN from '../components/buttonLGSN/buttonLGSN';
import CategoryDisplay from '../components/categoryDisplay/CategoryDisplay';
import Tag from '../components/tag/Tag';
import AuthorCircle from '../components/authorCircle/AuthorCircle';
import axios from '../axios/myAxios';

const Browse = (props) => {
	const dataCategoryDiplay = [
		{
			content: <Text style={{ fontSize: 19, color: 'white', textAlign: 'center' }}>CONFERENCE</Text>,
			uri:
				'https://images.unsplash.com/photo-1587613866780-23b903d3d97a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
			width: 170,
			height: 65,
			contentText: 'CONFERENCE'
		},
		{
			content: <Text style={{ fontSize: 19, color: 'white', textAlign: 'center' }}>Software development</Text>,
			uri:
				'https://images.unsplash.com/photo-1591000113910-81b25a4a2df0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
			width: 170,
			height: 65,
			contentText: 'Software development'
		},
		{
			content: <Text style={{ fontSize: 19, color: 'white', textAlign: 'center' }}>IT ops</Text>,
			uri:
				'https://images.unsplash.com/photo-1591035742999-2398c2ad8607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
			width: 170,
			height: 65,
			contentText: 'IT ops'
		},
		{
			content: <Text style={{ fontSize: 19, color: 'white', textAlign: 'center' }}>DATA PROFESSTIONAL</Text>,
			uri:
				'https://images.unsplash.com/photo-1591053204517-11b88b43d822?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=711&q=80',
			width: 170,
			height: 65,
			contentText: 'DATA PROFESSTIONAL'
		},
		{
			content: <Text style={{ fontSize: 19, color: 'white', textAlign: 'center' }}>BUSINESS PROFESSTIONAL</Text>,
			uri:
				'https://images.unsplash.com/photo-1591066538126-8f14b8d1ff41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
			width: 170,
			height: 65,
			contentText: 'BUSINESS PROFESSTIONAL'
		},
		{
			content: <Text style={{ fontSize: 19, color: 'white', textAlign: 'center' }}>CREATIVE PROFESSTIONAL</Text>,
			uri:
				'https://images.unsplash.com/photo-1590982963729-d5f71ccb7d03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
			width: 170,
			height: 65,
			contentText: 'CREATIVE PROFESSTIONAL'
		},
		{
			content: (
				<Text style={{ fontSize: 19, color: 'white', textAlign: 'center' }}>MANUFACTURING AND DESIGN</Text>
			),
			uri:
				'https://images.unsplash.com/photo-1590982963729-d5f71ccb7d03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
			width: 170,
			height: 65,
			contentText: 'MANUFACTURING AND DESIGN'
		},
		{
			content: (
				<Text style={{ fontSize: 19, color: 'white', textAlign: 'center' }}>ARCHITECTURE AND CONTRUCTION</Text>
			),
			uri:
				'https://images.unsplash.com/photo-1590982963729-d5f71ccb7d03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
			width: 170,
			height: 65,
			contentText: 'ARCHITECTURE AND CONTRUCTION'
		},
		{
			content: <Text style={{ fontSize: 19, color: 'white', textAlign: 'center' }}>CERTIFICATIONS</Text>,
			uri:
				'https://images.unsplash.com/photo-1590982963729-d5f71ccb7d03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
			width: 170,
			height: 65,
			contentText: 'CERTIFICATIONS'
		}
	];
	const dataTagPopularSkills = [
		'React',
		'Javascript',
		'C#',
		'Java',
		'Data Analysis',
		'ASP.NET',
		'Node.js',
		'Design Pattern',
		'Python',
		'Angular',
		'.NET',
		'SQL Server',
		'Database Administration',
		'Part Modeling',
		'Infomation Security',
		'ASP.NET Core',
		'TypeScript',
		'AI',
		'IOS'
	];
	const dataTopAuthors = [
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

	const [ listCourseData, setListCourseData ] = useState([]);
	//#region lifeCycle
	useEffect(() => {
		axios
			.get('/category/all')
			.then((response) => {
				let listCourse = response.data.payload;
				listCourse = listCourse.map((course, index) => {
					return {
						...course,
						...dataCategoryDiplay[index],
						content: (
							<Text style={{ fontSize: 19, color: 'white', textAlign: 'center' }}>{course.name}</Text>
						),
						contentText: course.name
					};
				});
				console.log('listCourseData', listCourse);
				setListCourseData(listCourse);
			})
			.catch((error) => console.log(error));
	}, []);
	//#region render

	const inviteLoginArea = () => {
		return (
			<View style={{ ...styles.inviteLogin, marginVertical: 30, marginTop: 25 }}>
				<Text style={{ fontSize: 22 }}>Login to skill up today</Text>
				<Text style={{}}>
					Keep your skills up-to-date with access to thousands of courses by industry experts
				</Text>
				<ButtonLGSN
					btnName="LOGIN TO START WATCHING"
					colorHex="#2590e9"
					textColor="white"
					style={{ marginTop: 10, width: 300 }}
					onPress={() => {
						props.navigation.navigate('Login');
					}}
				/>
			</View>
		);
	};
	const bigCategoryDisplayArea = () => {
		return (
			<View style={{ width: '100%', paddingHorizontal: 10 }}>
				<CategoryDisplay
					style={{ marginBottom: 10 }}
					width="100%"
					height={86}
					uri="https://images.unsplash.com/photo-1590982963729-d5f71ccb7d03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
					onPress={() => {
						props.navigation.navigate('CategoryCourses', {
							CategoryCourses: {
								uriImage:
									'https://images.unsplash.com/photo-1590982963729-d5f71ccb7d03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
								percentHeightImage: 30,
								categoryName: 'NEW RELEASES',
								percentTitleHeight: 30
							}
						});
					}}
				>
					<Text
						style={{
							fontSize: 20,
							color: 'white',
							width: 100,
							height: 50,
							fontWeight: 'bold',
							textAlign: 'center'
						}}
						multiline={true}
					>
						NEW RELEASES
					</Text>
				</CategoryDisplay>
				<CategoryDisplay
					onPress={() => {
						props.navigation.navigate('CategoryCourses', {
							CategoryCourses: {
								uriImage:
									'https://images.unsplash.com/photo-1590948288641-fd9a53b8fb30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
								percentHeightImage: 30,
								categoryName: 'RECOMENDED FOR YOU',
								percentTitleHeight: 30
							}
						});
					}}
					width="100%"
					height={86}
					uri="https://images.unsplash.com/photo-1590948288641-fd9a53b8fb30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
				>
					<Text
						style={{
							fontSize: 20,
							color: 'white',
							width: 150,
							height: 50,
							fontWeight: 'bold',
							textAlign: 'center'
						}}
						multiline={true}
					>
						RECOMENDED FOR YOU
					</Text>
				</CategoryDisplay>
			</View>
		);
	};
	const smallCategoryDisplayArea = () => {
		const dataForFlatList2Row = [];
		while (listCourseData.length > 0) {
			dataForFlatList2Row.push(listCourseData.splice(0, 2));
		}
		return (
			<View style={{ height: 136, width: '100%', marginTop: 10, paddingLeft: 10 }}>
				<FlatList
					horizontal={true}
					data={dataForFlatList2Row}
					renderItem={({ item }) => (
						<View style={{ justifyContent: 'space-between', marginRight: 6 }}>
							<CategoryDisplay
								onPress={() => {
									props.navigation.navigate('CategoruCoursesHorizontalList', {
										CategoruCoursesHorizontalList: {
											uriImage: item[0].uri,
											percentHeightImage: 50,
											categoryName: item[0].contentText,
											percentTitleHeight: 20,
											idCourse: item[0].id
										}
									});
								}}
								width={item[0].width}
								height={item[0].height}
								uri={item[0].uri}
							>
								{item[0].content}
							</CategoryDisplay>
							{item.length > 1 && (
								<CategoryDisplay
									onPress={() => {
										props.navigation.navigate('CategoruCoursesHorizontalList', {
											CategoruCoursesHorizontalList: {
												uriImage: item[1].uri,
												percentHeightImage: 50,
												categoryName: item[1].contentText,
												percentTitleHeight: 20,
												idCourse: item[1].id
											}
										});
									}}
									width={item[1].width}
									height={item[1].height}
									uri={item[1].uri}
								>
									{item[1].content}
								</CategoryDisplay>
							)}
						</View>
					)}
					keyExtractor={(item, index) => index}
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		);
	};
	const popularSkillArea = () => {
		return (
			<View style={{ height: 65, marginTop: 20 }}>
				<Text style={{ marginLeft: 10, marginBottom: 10 }}>Popular Skills</Text>
				<FlatList
					horizontal={true}
					data={dataTagPopularSkills}
					keyExtractor={(item, index) => index}
					renderItem={({ item, index }) =>
						index === 0 ? (
							<Tag
								onPress={() => {
									props.navigation.navigate('CategoryCoursesWithoutImage', {
										CategoryCoursesWithoutImage: {
											title: item
										}
									});
								}}
								content={item}
								style={{ marginRight: 5, backgroundColor: 'white', marginLeft: 10 }}
								color="#2590e9"
							/>
						) : (
							<Tag
								onPress={() => {
									props.navigation.navigate('CategoryCoursesWithoutImage', {
										CategoryCoursesWithoutImage: {
											title: item
										}
									});
								}}
								content={item}
								style={{ marginRight: 5, backgroundColor: 'white' }}
								color="#2590e9"
							/>
						)}
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		);
	};
	const topAuthor = () => {
		return (
			<View style={{ height: 140, marginTop: 20 }}>
				<Text style={{ marginLeft: 10, marginBottom: 10 }}>Top Authors</Text>
				<FlatList
					data={dataTopAuthors}
					horizontal={true}
					renderItem={({ item }) => <AuthorCircle {...item} style={{ marginRight: 10 }} />}
					keyExtractor={(item, index) => index}
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		);
	};
	return (
		<View style={styles.mainView}>
			<ScrollView style={{ flex: 1 }} contentContainerStyle={{ alignItems: 'center' }}>
				{inviteLoginArea()}
				{bigCategoryDisplayArea()}
				{smallCategoryDisplayArea()}
				{popularSkillArea()}
				{topAuthor()}
			</ScrollView>
		</View>
	);
};

Browse.navigationOptions = (props) => {
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
		backgroundColor: '#eef6fd',
		alignItems: 'center'
	},
	inviteLogin: {
		width: 300
	},
	headerRight: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingRight: 10
	}
});

export default Browse;
