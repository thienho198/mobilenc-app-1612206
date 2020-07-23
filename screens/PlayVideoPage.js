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
			dataLoad: {}
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
				this.setState({ dataLoad: res.data.payload });
			})
			.catch((err) => console.log(err));
	}
	renderLesson = (section) => {
		return (
			<View style={{ paddingHorizontal: 5, paddingTop: 7 }}>
				<Text style={{ fontSize: 19, color: 'white' }}>{section.name}</Text>
				{section.lesson.map((item) => {
					return (
						<View style={{ flexDirection: 'row', paddingLeft: 5, alignItems: 'center' }}>
							<View
								style={{
									height: 7,
									width: 7,
									borderRadius: 999,
									backgroundColor: 'black',
									marginRight: 5
								}}
							/>
							<Text style={{ fontSize: 16, color: 'white', marginBottom: 4 }}>{item.name}</Text>
						</View>
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
						backgroundColor: 'yellow',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Icon type="font-awesome-5" name={iconName} color="black" size={17} />
				</View>
				<Text style={{ color: 'white' }}>{name}</Text>
			</View>
		);
	};
	renderComponent1 = () => {
		return (
			<View
				style={{
					backgroundColor: 'red',
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
						backgroundColor: 'yellow',
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
					<Text> {_.get(this.state.dataLoad, 'instructor.name')}</Text>
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
								backgroundColor: 'yellow',
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
								color="black"
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
			<View style={{ height: 43, backgroundColor: 'yellow' }}>
				<View
					style={{
						flexDirection: 'row',
						backgroundColor: 'blue',
						justifyContent: 'space-around'
					}}
				>
					<View
						style={{ backgroundColor: 'yellow', flex: 1, borderRightColor: 'black', borderRightWidth: 1 }}
					>
						<TouchableOpacity
							style={{ height: 40, justifyContent: 'center', alignItems: 'center' }}
							onPress={() => this.setState({ render: 1 })}
						>
							<Text>CONTENTS</Text>
						</TouchableOpacity>
						<View style={{ height: this.state.render === 1 ? 3 : 0, backgroundColor: 'black' }} />
					</View>
					<View style={{ backgroundColor: 'yellow', flex: 1 }}>
						<TouchableOpacity
							style={{ height: 40, justifyContent: 'center', alignItems: 'center' }}
							onPress={() => this.setState({ render: 2 })}
						>
							<Text>TRANSCRIPT</Text>
						</TouchableOpacity>
						<View style={{ height: this.state.render === 2 ? 3 : 0, backgroundColor: 'black' }} />
					</View>
				</View>
			</View>
		);
	};
	renderComponent3 = () => {
		console.log('babe', _.get(this.state.dataLoad, 'section'));
		return (
			<View style={{ backgroundColor: 'green' }}>
				{_.get(this.state.dataLoad, 'section') &&
					_.get(this.state.dataLoad, 'section').map((item) => {
						return this.renderLesson(item);
					})}
			</View>
		);
	};
	renderComponent4 = () => {
		return <View style={{ height: 500, backgroundColor: 'pink' }} />;
	};
	render() {
		const collapsableComponent = (
			<View style={{ height: 100, backgroundColor: 'yellow', width: '100%', height: 0 }} />
		);

		return (
			<View style={{ flex: 1 }}>
				<View style={{ height: 200, backgroundColor: 'purple' }} />
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
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	}
});

const mapStateToProps = (state) => {
	return {
		userId: state.auth.authData.id
	};
};

export default connect(mapStateToProps)(CollapsibleExample);
