import React from 'react';
import { View, Image, Text } from 'react-native';

const AuthorDetail = (props) => {
	const dataProps = props.route.params.AuthorDetail;
	return (
		<View style={{ flex: 1 }}>
			<View style={{ alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
				<Image
					style={{
						width: 200,
						height: 200,
						borderRadius: 100
					}}
					source={{
						uri:
							'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
					}}
				/>
			</View>
			<View
				style={{
					flexDirection: 'row',
					paddingHorizontal: 10,
					marginBottom: 5
				}}
			>
				<Text style={{ fontSize: 17, fontWeight: 'bold', marginRight: 4 }}>Name:</Text>
				<Text style={{ fontSize: 17 }}>{dataProps.authorName}</Text>
			</View>
			<View
				style={{
					flexDirection: 'row',
					paddingHorizontal: 10,
					marginBottom: 5,
					marginRight: 20
				}}
			>
				<Text style={{ fontSize: 17, fontWeight: 'bold', marginRight: 4 }}>Intro:</Text>
				<Text style={{ fontSize: 17 }}>{dataProps.authorIntro}</Text>
			</View>
			<View style={{ flexDirection: 'row', paddingHorizontal: 10, marginBottom: 5 }}>
				<Text style={{ fontSize: 17, fontWeight: 'bold', marginRight: 4 }}>Email:</Text>
				<Text style={{ fontSize: 17 }}>{dataProps.authorEmail}</Text>
			</View>

			<View style={{ flexDirection: 'row', paddingHorizontal: 10, marginBottom: 5 }}>
				<Text style={{ fontSize: 17, fontWeight: 'bold', marginRight: 4 }}>Major:</Text>
				<Text style={{ fontSize: 17 }}>{dataProps.authorMajor}</Text>
			</View>
			<View style={{ flexDirection: 'row', paddingHorizontal: 10, marginBottom: 5 }}>
				<Text style={{ fontSize: 17, fontWeight: 'bold', marginRight: 4 }}>Phone Number:</Text>
				<Text style={{ fontSize: 17 }}>{dataProps.authorPhoneNumber}</Text>
			</View>
			<View style={{ flexDirection: 'row', paddingHorizontal: 10, marginBottom: 5 }}>
				<Text style={{ fontSize: 17, fontWeight: 'bold', marginRight: 4 }}>Skills:</Text>
				<View>
					{dataProps.authorSkills &&
						dataProps.authorSkills.map((item, index) => {
							return (
								<Text style={{ fontSize: 17, marginLeft: 5 }} key={index}>
									{item}
								</Text>
							);
						})}
				</View>
			</View>
		</View>
	);
};

export default AuthorDetail;
