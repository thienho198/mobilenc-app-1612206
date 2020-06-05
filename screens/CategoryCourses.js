import React from 'react';
import { Text } from 'react-native';

import Course from '../components/course/Course';
import BGCategoryCourses from '../components/backgroundCategoryCourse/BGCategoryCourses';

const CategoryCourses = (props) => {
	// console.log('haha', props.route);
	return (
		<BGCategoryCourses
			// uriImage="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
			// percentHeightImage={30}
			{...props}
		>
			<Course
				uriImage="https://pluralsight.imgix.net/course-images/debugging-progressive-web-apps-v1.png?w=120"
				title="Debugging Progressive Web Apps"
				authorName="Deeksha Sharma"
				level="Beginner"
				createTime="Jun 3, 2020"
				duringTime="1h 25m"
			/>
			<Course
				uriImage="https://pluralsight.imgix.net/course-images/debugging-progressive-web-apps-v1.png?w=120"
				title="Debugging Progressive Web Apps"
				authorName="Deeksha Sharma"
				level="Beginner"
				createTime="Jun 3, 2020"
				duringTime="1h 25m"
			/>
			<Course
				uriImage="https://pluralsight.imgix.net/course-images/debugging-progressive-web-apps-v1.png?w=120"
				title="Debugging Progressive Web Apps"
				authorName="Deeksha Sharma"
				level="Beginner"
				createTime="Jun 3, 2020"
				duringTime="1h 25m"
			/>
			<Course
				uriImage="https://pluralsight.imgix.net/course-images/debugging-progressive-web-apps-v1.png?w=120"
				title="Debugging Progressive Web Apps"
				authorName="Deeksha Sharma"
				level="Beginner"
				createTime="Jun 3, 2020"
				duringTime="1h 25m"
			/>
			<Course
				uriImage="https://pluralsight.imgix.net/course-images/debugging-progressive-web-apps-v1.png?w=120"
				title="Debugging Progressive Web Apps"
				authorName="Deeksha Sharma"
				level="Beginner"
				createTime="Jun 3, 2020"
				duringTime="1h 25m"
			/>
			<Course
				uriImage="https://pluralsight.imgix.net/course-images/debugging-progressive-web-apps-v1.png?w=120"
				title="Debugging Progressive Web Apps"
				authorName="Deeksha Sharma"
				level="Beginner"
				createTime="Jun 3, 2020"
				duringTime="1h 25m"
			/>
			<Course
				uriImage="https://pluralsight.imgix.net/course-images/debugging-progressive-web-apps-v1.png?w=120"
				title="Debugging Progressive Web Apps"
				authorName="Deeksha Sharma"
				level="Beginner"
				createTime="Jun 3, 2020"
				duringTime="1h 25m"
			/>
			<Course
				uriImage="https://pluralsight.imgix.net/course-images/debugging-progressive-web-apps-v1.png?w=120"
				title="Debugging Progressive Web Apps"
				authorName="Deeksha Sharma"
				level="Beginner"
				createTime="Jun 3, 2020"
				duringTime="1h 25m"
			/>
			<Course
				uriImage="https://pluralsight.imgix.net/course-images/debugging-progressive-web-apps-v1.png?w=120"
				title="Debugging Progressive Web Apps"
				authorName="Deeksha Sharma"
				level="Beginner"
				createTime="Jun 3, 2020"
				duringTime="1h 25m"
			/>
			<Course
				uriImage="https://pluralsight.imgix.net/course-images/debugging-progressive-web-apps-v1.png?w=120"
				title="Debugging Progressive Web Apps"
				authorName="Deeksha Sharma"
				level="Beginner"
				createTime="Jun 3, 2020"
				duringTime="1h 25m"
			/>
		</BGCategoryCourses>
	);
};

export default CategoryCourses;
