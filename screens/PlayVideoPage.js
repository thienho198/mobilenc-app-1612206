import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert, Clipboard } from 'react-native';
import axios from '../axios/myAxios';
import { connect } from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';
import { ScrollableTabView, DefaultTabBar, ScrollableTabBar } from '@valdio/react-native-scrollable-tabview';
import { ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import _ from 'lodash';
import moment from 'moment';
import Spinner from 'react-native-loading-spinner-overlay';
import { Video } from 'expo-av';
import ButtonLGSN from '../components/buttonLGSN/buttonLGSN';
import StarRating from 'react-native-star-rating';

const FirstRoute = () => (
	<View style={[ styles.container, {} ]}>
		<Text>shkfeAAAAAAAAAAAAAAAAAAAAAAAAgffsd</Text>
		<Text>shkfeAAAAAAAAAAAAAAAAAAAAAAAAgffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>shkfegffsd</Text>
		<Text>ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ</Text>
	</View>
);

class CollapsibleExample extends Component {
	constructor(props) {
		super(props);
		this.dataProps = props.route.params.PlayVideoPage;
		this.refVideo = React.createRef();
		this.state = {
			toggleDescribe: {
				iconName: 'arrow-down',
				height: 50
			},
			render: 1,
			dataLoad: {},
			loading: true,
			shouldPlay: false,
			isMuted: false,
			dataComment: [],
			meRating: 0,
			comment: '',
			isBuyCourse: false,
			isLike: false,
			coursesData: []
		};
		this.currentLesson = '';
	}

	_onRefresh = (callback) => {
		callback && setTimeout(callback({ test: 'dkjdd' }, 3000));
	};

	renderComment(item, index) {
		return (
			<View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
				<Image
					style={{ height: 50, width: 50, borderRadius: 999 }}
					source={{
						uri: item.user.avatar
					}}
				/>
				<View style={{ marginLeft: 5, alignItems: 'flex-start' }}>
					<Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>{item.user.email}</Text>

					<StarRating
						disabled={false}
						maxStars={5}
						rating={item.averagePoint}
						selectedStar={(rating) => {}}
						fullStarColor={'#ffc107'}
						starSize={14}
					/>
					<Text style={{ color: 'white', fontSize: 13 }}>{item.content}</Text>
				</View>
			</View>
		);
	}
	componentDidMount() {
		console.log('abcde', `/course/get-course-detail/${this.dataProps.id}/${this.props.userId}`);
		axios
			.get(`/course/get-course-detail/${this.dataProps.id}/${this.props.userId}`)
			.then((res) => {
				this.setState({
					dataLoad: res.data.payload,
					loading: false,
					dataComment: res.data.payload.ratings.ratingList
				});
				console.log('detail123', res.data.payload);
			})
			.catch((err) => {
				console.log(err);
				this.setState({ loading: false });
			});
		axios.get(`/payment/get-course-info/${this.dataProps.id}`).then((res) => {
			this.setState({
				loading: false,
				isBuyCourse: res.data.didUserBuyCourse
			});
		});
		axios.get(`/user/get-course-like-status/${this.dataProps.id}`).then((res) => {
			this.setState({
				loading: false,
				isLike: res.data.likeStatus
			});
		});
		axios.get(`/user/recommend-course/${this.props.userId}/10/0`).then((res) => {
			this.setState({
				loading: false,
				coursesData: res.data.payload
			});
		});
		axios.get(`/course/last-watched-lesson/${this.dataProps.id}`).then((res) => {
			console.log('rew', res.data.payload);
			this.setState(
				{
					loading: false,
					urlVideo: res.data.payload.videoUrl
				},
				() => {
					this.refVideo.setPositionAsync(res.data.payload.currentTime);
				}
			);
		});
		// axios.get(`/course/get-rating/${this.dataProps.id}`).then((res) => {
		// 	console.log('rating', res.data);
		// 	this.setState({ dataComment: res.data.payload.ratings.ratingList });
		// });
	}
	renderLesson = (section, index) => {
		return (
			<View style={{ paddingHorizontal: 5, paddingTop: 7 }} key={index}>
				<Text style={{ fontSize: 19, color: 'white' }}>{section.name}</Text>
				{section.lesson.map((item, index) => {
					return (
						<TouchableOpacity
							style={{ flexDirection: 'row', paddingLeft: 5, alignItems: 'center' }}
							onPress={() => {
								if (this.currentLesson != '') {
									this.refVideo.getStatusAsync().then((res) => {
										console.log('vcb', res);
										axios
											.put('/lesson/update-current-time-learn-video', {
												lessonId: this.currentLesson,
												currentTime: res.positionMillis
											})
											.then((res1) => {
												const seconds = Number(res.positionMillis) / 1000;
												Alert.alert(
													`Ghi nhận bạn học lesson ${this
														.currentLessonName} tại ${seconds} giây`
												);
												this.currentLesson = item.id;
												this.currentLessonName = item.name;
												this.setState({ urlVideo: item.videoUrl });
											});
									});
								} else {
									this.currentLesson = item.id;
									this.currentLessonName = item.name;
									this.setState({ urlVideo: item.videoUrl });
								}
							}}
							key={index}
						>
							<View
								style={{
									height: 7,
									width: 7,
									borderRadius: 999,
									backgroundColor: 'white',
									marginRight: 5
								}}
							/>
							<Text style={{ fontSize: 16, color: 'white', marginBottom: 4 }}>{item.name}</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		);
	};
	renderButton = (name, iconName) => {
		return (
			<TouchableOpacity
				style={{ alignItems: 'center' }}
				// onPress={() => {
				// 	Clipboard.setString(this.state.dataLoad.promoVidUrl);
				// 	Alert.alert('Đã copy link share vào clipboard');
				// }}
				onPress={() => {
					this.refVideo.getStatusAsync().then((res) => console.log('vcb', res));
				}}
			>
				<View
					style={{
						height: 40,
						width: 40,
						borderRadius: 20,
						backgroundColor: '#72b7f1',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Icon type="font-awesome-5" name={iconName} color="white" size={17} />
				</View>
				<Text style={{ color: 'white' }}>{name}</Text>
			</TouchableOpacity>
		);
	};
	renderComponent1 = () => {
		return (
			<View
				style={{
					backgroundColor: '#3498eb',
					alignItems: 'flex-start',
					paddingVertical: 12,
					paddingHorizontal: 7
				}}
			>
				<Text style={{ fontSize: 23, color: 'white', textAlign: 'left', marginBottom: 3 }}>
					{_.get(this.state.dataLoad, 'title')}
				</Text>
				<View
					style={{
						flexDirection: 'row',
						backgroundColor: '#72b7f1',
						padding: 3,
						borderRadius: 999,
						paddingRight: 6,
						marginBottom: 3
					}}
				>
					<Image
						style={{ height: 20, width: 20, borderRadius: 999 }}
						source={{
							uri:
								'https://images.unsplash.com/photo-1595350670723-6618500e6f94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80'
						}}
					/>
					<Text style={{ color: 'white' }}> {_.get(this.state.dataLoad, 'instructor.name')}</Text>
				</View>
				<Text style={{ color: 'white', marginBottom: 10 }}>{`Beginner - ${moment(
					_.get(this.state.dataLoad, 'createdAt')
				).format('MMM Do YY')} - ${_.get(this.state.dataLoad, 'totalHours') + 'h'}`}</Text>
				<View style={{ flexDirection: 'row', marginBottom: 5 }}>
					<Text style={{ color: 'white' }}>Đánh giá: </Text>
					<StarRating
						disabled={false}
						maxStars={5}
						rating={this.state.dataLoad.contentPoint}
						selectedStar={(rating) => {}}
						fullStarColor={'#ffc107'}
						starSize={20}
					/>
					{this.state.isBuyCourse ? (
						<Text style={{ color: 'white', marginBottom: 5, marginLeft: 5 }}> Đã mua khóa học</Text>
					) : (
						<TouchableOpacity
							style={{
								backgroundColor: 'white',
								borderRadius: 999,
								paddingHorizontal: 4,
								marginLeft: 5
							}}
							onPress={() => {
								axios
									.post('/payment/get-free-courses', {
										courseId: this.state.dataLoad.id
									})
									.then((res) => {
										Alert.alert('Mua khóa học thành công');
										axios.get(`/payment/get-course-info/${this.dataProps.id}`).then((res) => {
											this.setState({
												loading: false,
												isBuyCourse: res.data.didUserBuyCourse
											});
										});
									})
									.catch((err) => {
										console.log(err);
										Alert.alert('Lỗi hệ thống');
									});
							}}
						>
							<Text style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Mua khóa học</Text>
						</TouchableOpacity>
					)}
					{this.state.isLike ? (
						<TouchableOpacity
							style={{
								backgroundColor: 'white',
								borderRadius: 999,
								paddingHorizontal: 4,
								marginLeft: 5
							}}
							onPress={() => {
								axios
									.post('/user/like-course', {
										courseId: this.state.dataLoad.id
									})
									.then((res) => {
										Alert.alert('Bỏ thích khóa học thành công');
										axios.get(`/user/get-course-like-status/${this.dataProps.id}`).then((res) => {
											this.setState({
												loading: false,
												isLike: res.data.likeStatus
											});
										});
									})
									.catch((err) => {
										console.log(err);
										Alert.alert('Lỗi hệ thống');
									});
							}}
						>
							<Text style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Bỏ thích khóa học</Text>
						</TouchableOpacity>
					) : (
						<TouchableOpacity
							style={{
								backgroundColor: 'white',
								borderRadius: 999,
								paddingHorizontal: 4,
								marginLeft: 5
							}}
							onPress={() => {
								axios
									.post('/user/like-course', {
										courseId: this.state.dataLoad.id
									})
									.then((res) => {
										Alert.alert('Thích khóa học thành công');
										axios.get(`/user/get-course-like-status/${this.dataProps.id}`).then((res) => {
											this.setState({
												loading: false,
												isLike: res.data.likeStatus
											});
										});
									})
									.catch((err) => {
										console.log(err);
										Alert.alert('Lỗi hệ thống');
									});
							}}
						>
							<Text style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Thích khóa học</Text>
						</TouchableOpacity>
					)}
				</View>

				<View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 10 }}>
					{this.renderButton('Share course', 'bookmark')}
					{this.renderButton('Add to Channel', 'tv')}
					{this.renderButton('Download', 'cloud-download-alt')}
				</View>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flex: 1, height: this.state.toggleDescribe.height }}>
						<Text style={{ fontSize: 17, color: 'white' }}>
							{_.get(this.state.dataLoad, 'description')}
						</Text>
					</View>
					<View style={{ width: 30, alignItems: 'center', paddingTop: 5 }}>
						<TouchableOpacity
							style={{
								width: 25,
								backgroundColor: '#72b7f1',
								height: 45,
								justifyContent: 'center',
								borderRadius: 999
							}}
							onPress={() => {
								this.setState((prevS) => {
									if (prevS.toggleDescribe.iconName === 'arrow-down') {
										return {
											toggleDescribe: {
												iconName: 'arrow-up',
												height: 'auto'
											}
										};
									} else {
										return {
											toggleDescribe: {
												iconName: 'arrow-down',
												height: 50
											}
										};
									}
								});
							}}
						>
							<Icon
								type="font-awesome-5"
								name={this.state.toggleDescribe.iconName}
								color="white"
								size={17}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	};
	renderComponent2 = () => {
		return (
			<View style={{ height: 43, backgroundColor: '#2590e9' }}>
				<View
					style={{
						flexDirection: 'row',
						backgroundColor: 'blue',
						justifyContent: 'space-around'
					}}
				>
					<View
						style={{ backgroundColor: '#2590e9', flex: 1, borderRightColor: 'white', borderRightWidth: 1 }}
					>
						<TouchableOpacity
							style={{ height: 40, justifyContent: 'center', alignItems: 'center' }}
							onPress={() => this.setState({ render: 1 })}
						>
							<Text style={{ color: 'white' }}>CONTENTS</Text>
						</TouchableOpacity>
						<View style={{ height: this.state.render === 1 ? 3 : 0, backgroundColor: 'white' }} />
					</View>
					<View
						style={{ backgroundColor: '#2590e9', flex: 1, borderRightColor: 'white', borderRightWidth: 1 }}
					>
						<TouchableOpacity
							style={{ height: 40, justifyContent: 'center', alignItems: 'center' }}
							onPress={() => this.setState({ render: 2 })}
						>
							<Text style={{ color: 'white' }}>COMMENTS</Text>
						</TouchableOpacity>
						<View style={{ height: this.state.render === 2 ? 3 : 0, backgroundColor: 'white' }} />
					</View>
					<View style={{ backgroundColor: '#2590e9', flex: 1 }}>
						<TouchableOpacity
							style={{ height: 40, justifyContent: 'center', alignItems: 'center' }}
							onPress={() => this.setState({ render: 3 })}
						>
							<Text style={{ color: 'white' }}>RELATED COURSES</Text>
						</TouchableOpacity>
						<View style={{ height: this.state.render === 3 ? 3 : 0, backgroundColor: 'white' }} />
					</View>
				</View>
			</View>
		);
	};
	renderComponent3 = () => {
		console.log('babe', _.get(this.state.dataLoad, 'section'));
		return (
			<View style={{ backgroundColor: '#1788e6' }}>
				{_.get(this.state.dataLoad, 'section') &&
					_.get(this.state.dataLoad, 'section').map((item, index) => {
						return this.renderLesson(item, index);
					})}
			</View>
		);
	};
	renderItem = (item, index) => {
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
					this.props.navigation.navigate('Course Detail', {
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
	renderComponent4 = () => {
		return (
			<View style={{ minHeight: 300, backgroundColor: '#1788e6' }}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<TextInput
						placeholder="Bình luận"
						style={{
							height: 30,
							borderColor: 'white',
							borderWidth: 1,
							paddingLeft: 10,
							borderRadius: 999,
							marginTop: 10,

							flex: 1
						}}
						value={this.state.comment}
						onChangeText={(value) => {
							this.setState({ comment: value });
						}}
					/>
					<View style={{ width: 70, marginTop: 5 }}>
						<StarRating
							disabled={false}
							maxStars={5}
							rating={this.state.meRating}
							selectedStar={(rating) => {
								this.setState({ meRating: rating });
							}}
							fullStarColor={'#ffc107'}
							starSize={14}
						/>
					</View>
				</View>
				<TouchableOpacity
					style={{
						borderWidth: 1,
						borderColor: 'white',
						backgroundColor: 'white',
						borderRadius: 999,
						width: 40,
						marginTop: 5,
						marginBottom: 10,
						marginLeft: 5
					}}
					onPress={() => {
						axios
							.post('/course/rating-course', {
								courseId: this.dataProps.id,
								formalityPoint: this.state.meRating,
								contentPoint: this.state.meRating,
								presentationPoint: this.state.meRating,
								content: this.state.comment
							})
							.then((res) => {
								this.setState({ loading: true });
								Alert.alert('Bình luận thành công');
								axios
									.get(`/course/get-course-detail/${this.dataProps.id}/${this.props.userId}`)
									.then((res) => {
										this.setState({
											dataLoad: res.data.payload,
											loading: false,
											dataComment: res.data.payload.ratings.ratingList
										});
										console.log('detail123', res.data.payload.ratings);
									})
									.catch((err) => {
										console.log(err);
										this.setState({ loading: false });
									});
							})
							.catch((err) => {
								Alert.alert('Bạn không thể truy cập khóa học này!');
								console.log(err);
							});
					}}
				>
					<Text style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Đăng</Text>
				</TouchableOpacity>
				{this.state.dataComment.map((item, index) => this.renderComment(item, index))}
			</View>
		);
	};
	renderComponent5 = () => {
		return (
			<View style={{ backgroundColor: '#1788e6', minHeight: 300, paddingTop: 20 }}>
				<View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
					{this.state.coursesData.map((item, index) => this.renderItem(item, index))}
				</View>
			</View>
		);
	};
	render() {
		const collapsableComponent = (
			<View style={{ height: 100, backgroundColor: 'yellow', width: '100%', height: 0 }} />
		);

		return this.props.isAuthenticated ? (
			<View style={{ flex: 1 }}>
				<Spinner visible={this.state.loading} textContent={'Loading...'} textStyle={{ color: '#FFF' }} />
				<View
					style={{
						height: 230,
						backgroundColor: 'white',
						position: 'relative',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Text style={{ fontSize: 18 }}>Hãy chọn nội dung để phát...</Text>
					<Video
						ref={(ref) => {
							this.refVideo = ref;
						}}
						source={{
							uri: this.state.urlVideo
						}}
						shouldPlay={this.state.shouldPlay}
						resizeMode="cover"
						style={{
							width: '100%',
							height: 230,
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0
						}}
						isMuted={this.state.mute}
					/>
					<View
						style={{
							position: 'absolute',
							bottom: 0,
							left: 0,
							right: 0,
							height: 40,
							flexDirection: 'row',
							alignItems: 'center',
							backgroundColor: 'rgba(0, 0, 0, 0.5)'
						}}
					>
						<TouchableOpacity
							onPress={() => {
								this.setState((prevS) => {
									return { shouldPlay: !prevS.shouldPlay };
								});
							}}
							style={{
								marginLeft: 10
							}}
						>
							<Icon
								type="font-awesome-5"
								name={this.state.shouldPlay ? 'pause' : 'play'}
								color="white"
								size={17}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<ScrollView style={{ flex: 1 }} stickyHeaderIndices={[ 1 ]} showsVerticalScrollIndicator={false}>
					{this.renderComponent1()}
					{this.renderComponent2()}
					{this.state.render === 1 ? this.renderComponent3() : null}
					{this.state.render === 2 ? this.renderComponent4() : null}
					{this.state.render === 3 ? this.renderComponent5() : null}
					{/* <View style={{ flex: 1 }}>
					<ScrollableTabView
						pullToRefresh={this._onRefresh}
						collapsableBar={collapsableComponent}
						tabBarBackgroundColor="white"
						renderTabBar={() => <DefaultTabBar />}
					>
						<View tabLabel="CONTENTS" style={{ backgroundColor: '#2590e9' }}>
							<FirstRoute />
						</View>
						<View tabLabel="TRANSCRIPT" style={{ backgroundColor: '#2590e9' }}>
							<FirstRoute />
							<FirstRoute />
						</View>
					</ScrollableTabView>
				</View> */}
				</ScrollView>
			</View>
		) : (
			<View style={styles.mainView}>
				<Text style={styles.titleMain}>Please login to continue</Text>
				<ButtonLGSN
					btnName="LOGIN"
					colorHex="#2590e9"
					textColor="white"
					style={{ marginTop: 14 }}
					onPress={() => {
						this.props.navigation.navigate('Login');
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	mainView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#eef6fd'
	},
	titleMain: {
		fontSize: 16
	}
});

const mapStateToProps = (state) => {
	return {
		userId: state.auth.authData.id,
		isAuthenticated: state.auth.isAuthenticated
	};
};

export default connect(mapStateToProps)(CollapsibleExample);
