import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
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
		this.state = {
			toggleDescribe: {
				iconName: 'arrow-down',
				height: 50
			},
			render: 1,
			dataLoad: {},
			loading: true,
			shouldPlay: false,
			isMuted: false
		};
	}

	_onRefresh = (callback) => {
		callback && setTimeout(callback({ test: 'dkjdd' }, 3000));
	};

	componentDidMount() {
		console.log('abcde', `/course/get-course-detail/${this.dataProps.id}/${this.props.userId}`);
		axios
			.get(`/course/get-course-detail/${this.dataProps.id}/${this.props.userId}`)
			.then((res) => {
				this.setState({ dataLoad: res.data.payload, loading: false });
			})
			.catch((err) => {
				console.log(err);
				this.setState({ loading: false });
			});
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
								this.setState({ urlVideo: item.videoUrl });
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
			<View style={{ alignItems: 'center' }}>
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
			</View>
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
				<View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 10 }}>
					{this.renderButton('Bookmark', 'bookmark')}
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
					<View style={{ backgroundColor: '#2590e9', flex: 1 }}>
						<TouchableOpacity
							style={{ height: 40, justifyContent: 'center', alignItems: 'center' }}
							onPress={() => this.setState({ render: 2 })}
						>
							<Text style={{ color: 'white' }}>TRANSCRIPT</Text>
						</TouchableOpacity>
						<View style={{ height: this.state.render === 2 ? 3 : 0, backgroundColor: 'white' }} />
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
	renderComponent4 = () => {
		return (
			<View style={{ height: 500, backgroundColor: '#1788e6', justifyContent: 'space-between' }}>
				<Text style={{ color: 'white' }}>No transcription!-header</Text>
				<Text style={{ color: 'white' }}>No transcription!-footer</Text>
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
					{this.state.render === 1 ? this.renderComponent3() : this.renderComponent4()}

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
