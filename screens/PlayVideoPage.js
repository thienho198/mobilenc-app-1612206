import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from '../axios/myAxios';
import { connect } from 'react-redux';

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

import { ScrollableTabView, DefaultTabBar, ScrollableTabBar } from '@valdio/react-native-scrollable-tabview';

class CollapsibleExample extends Component {
	constructor(props) {
		super(props);
		this.dataProps = props.route.params.PlayVideoPage;
	}
	_onRefresh = (callback) => {
		callback && setTimeout(callback({ test: 'dkjdd' }, 3000));
	};

	componentDidMount() {
		console.log('abcde', `/course/get-course-detail/${this.dataProps.id}/${this.props.userId}`);
		axios
			.get(`/course/get-course-detail/${this.dataProps.id}/${this.props.userId}`)
			.then((res) => {
				console.log('123456', res);
			})
			.catch((err) => console.log(err));
	}
	render() {
		const collapsableComponent = (
			<View style={{ height: 300, backgroundColor: 'yellow', width: '100%', height: 0 }} />
		);

		return (
			<View style={{ flex: 1 }}>
				<View style={{ height: 300 }} />
				<View style={{ flex: 1 }}>
					<ScrollableTabView
						pullToRefresh={this._onRefresh}
						collapsableBar={collapsableComponent}
						tabBarBackgroundColor="white"
						renderTabBar={() => <DefaultTabBar />}
					>
						<View tabLabel="iOS" style={{ backgroundColor: 'blue' }}>
							<FirstRoute />
						</View>
						<View tabLabel="Android" style={{ backgroundColor: 'blue' }}>
							<FirstRoute />
							<FirstRoute />
						</View>
					</ScrollableTabView>
				</View>
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
