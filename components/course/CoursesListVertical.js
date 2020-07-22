import React from 'react';
import { FlatList, View, Text } from 'react-native';
import CourseVertical from './CourseVertical';

const CoursesListVertical = (props) => {
	const { dataList, listTitle } = props;
	//#region render
	return (
		<View style={{ marginTop: 10 }}>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
				<Text style={{ marginLeft: 10, fontWeight: 'bold', color: 'white' }}>{listTitle}</Text>
				<Text style={{ marginRight: 10, color: 'white' }}>See all </Text>
			</View>
			<FlatList
				keyExtractor={(item, index) => index}
				data={dataList}
				renderItem={({ item }) => <CourseVertical {...props} {...item} />}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

export default CoursesListVertical;
