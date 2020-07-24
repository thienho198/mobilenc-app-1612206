import React, { useEffect, useState, usePrevious } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { TabActions } from '@react-navigation/native';
import { connect } from 'react-redux';
import axios from '../axios/myAxios';

const Home = (props) => {
	//#region constructor
	const jumpToAction = TabActions.jumpTo('Browse');
	const [ recommendedData, setRecommendedData ] = useState([]);
	const { id } = props;
	//#region lifeCycle

	useEffect(
		() => {
			id &&
				axios.get(`/user/recommend-course/${id}/10/0`).then((res) => {
					setRecommendedData(res.data.payload);
					console.log('payload', recommendedData);
				});
		},
		[ id ]
	);

	//#region functions
	const renderItem = (item, index) => {
		return (
			<TouchableOpacity
				style={{
					width: 150,
					marginLeft: 10,
					borderRadius: 10,
					overflow: 'hidden',
					backgroundColor: '#a0cff5',
					marginBottom: 10
				}}
				key={item.id}
				onPress={() => {
					props.navigation.navigate('Course Detail', {
						PlayVideoPage: {
							id: item.id
						}
					});
				}}
				key={index}
			>
				<Image
					source={{
						uri:
							item.imageUrl ||
							'https://www.google.com.vn/url?sa=i&url=https%3A%2F%2Fwww.talkandroid.com%2F343746-android-10-official%2F&psig=AOvVaw3fbVN00QD3xxE96suf9Yd8&ust=1594226798415000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLiwtubLu-oCFQAAAAAdAAAAABAE'
					}}
					style={{ width: '100%', height: 100 }}
				/>
				<Text style={{ padding: 5, fontWeight: 'bold' }}>{item.title}</Text>
				<View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 3, paddingBottom: 10 }}>
					<Text>Giá:</Text>
					<Text style={{ marginLeft: 4 }}>{item.price} vnđ</Text>
				</View>
			</TouchableOpacity>
		);
	};
	//#region render
	return props.isAuthenticated ? (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={{ flex: 1 }}
			contentContainerStyle={{ backgroundColor: 'rgba(37, 144, 233, 1)' }}
		>
			<View style={{ backgroundColor: '#eef6fd', flex: 1 }}>
				<Text style={{ marginLeft: 10, marginBottom: 10, fontWeight: 'bold', marginTop: 5, fontSize: 20 }}>
					Recommend Courses
				</Text>
				<View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
					{recommendedData.map((item, index) => renderItem(item, index))}
				</View>
			</View>
		</ScrollView>
	) : (
		<View style={styles.mainView}>
			<Text style={styles.titleMain}>Let's get you started</Text>
			<TouchableOpacity
				onPress={() => {
					props.navigation.dispatch(jumpToAction);
				}}
			>
				<Icon type="material" name="dns" size={40} color="#2590e9" />
			</TouchableOpacity>

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

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.isAuthenticated,
		id: state.auth.authData.id
	};
};
export default connect(mapStateToProps)(Home);
