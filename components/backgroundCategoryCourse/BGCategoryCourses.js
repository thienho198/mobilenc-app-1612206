import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet, Text, ScrollView, ImageBackground, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { vh } from 'react-native-css-vh-vw';
import axios from '../../axios/myAxios';
import { connect } from 'react-redux';
import _ from 'lodash';
import { checkLogin } from '../../store/actions/auth';

const BGCategoryCourses = (props) => {
	const { uriImage, percentHeightImage, categoryName, percentTitleHeight, idCourse } = props;

	//#region render
	return (
		// <LinearGradient
		// 	colors={[ 'rgba(255,255,255, 0.2)', 'rgba(19, 109, 184, 0.9)' ]}
		// 	style={{ flex: 1 }}
		// 	locations={[ 0, 0.2 ]}
		// >
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={styles.mainView}
			contentContainerStyle={{ backgroundColor: 'rgba(37, 144, 233, 1)' }}
		>
			<LinearGradient
				colors={[ 'rgba(255,255,255, 0.2)', 'rgba(37, 144, 233, 1)' ]}
				locations={[ 0, 0.5 ]}
				style={{
					height: vh(percentHeightImage),
					width: '100%',
					position: 'absolute',
					top: 0,
					left: 0
				}}
			>
				<Image
					source={{ uri: uriImage }}
					style={{
						width: '100%',
						height: '100%',
						opacity: 0.2
					}}
				/>
			</LinearGradient>
			<TouchableOpacity
				style={{ position: 'absolute', top: 30, left: 10 }}
				onPress={() => {
					props.goBack();
				}}
			>
				<Icon type="font-awesome-5" name="arrow-left" color="white" />
			</TouchableOpacity>
			<TouchableOpacity
				style={{ position: 'absolute', top: 30, right: 10 }}
				onPress={() => {
					let newCategories = _.cloneDeep(props.favoriteCategories);
					if (newCategories.some((item) => item === idCourse)) {
						newCategories = _.remove(newCategories, (item) => item !== idCourse);
						props.startLoading();
						axios
							.put('/user/update-favorite-categories', {
								categoryIds: newCategories
							})
							.then((res) => {
								Alert.alert(
									'Thông báo',
									'Xóa lĩnh vực yêu thích thành công',
									[
										{
											text: 'Cancel',
											onPress: () => console.log('Cancel Pressed'),
											style: 'cancel'
										},
										{ text: 'OK', onPress: () => console.log('OK Pressed') }
									],
									{ cancelable: false }
								);
								props.stopLoading();
								props.checkLogin();
							});
					} else {
						newCategories.push(idCourse);
						props.startLoading();
						axios
							.put('/user/update-favorite-categories', {
								categoryIds: newCategories
							})
							.then((res) => {
								Alert.alert(
									'Thông báo',
									'Thêm lĩnh vực yêu thích thành công',
									[
										{
											text: 'Cancel',
											onPress: () => console.log('Cancel Pressed'),
											style: 'cancel'
										},
										{ text: 'OK', onPress: () => console.log('OK Pressed') }
									],
									{ cancelable: false }
								);
								props.stopLoading();
								props.checkLogin();
							});
					}
				}}
			>
				<Icon
					type="font-awesome-5"
					name={props.favoriteCategories.some((item) => item === idCourse) ? 'heart-broken' : 'heart'}
					color="white"
				/>
			</TouchableOpacity>
			<View
				style={{
					height: vh(percentTitleHeight),
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Text
					style={{
						textAlign: 'center',
						color: 'white',
						fontSize: 35,
						width: 250,
						paddingTop: 30,
						fontWeight: 'bold'
					}}
				>
					{categoryName}
				</Text>
			</View>
			<View style={{}}>{props.children}</View>
		</ScrollView>
		// </LinearGradient>
	);
};

const styles = StyleSheet.create({
	mainView: {
		flex: 1
	}
});

const mapStateToProps = (state) => {
	return {
		favoriteCategories: state.auth.authData.favoriteCategories
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		checkLogin: () => dispatch(checkLogin())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BGCategoryCourses);
