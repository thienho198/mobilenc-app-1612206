import React from 'react';
import { View, Text, Switch } from 'react-native';

export default class Setting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tg1: true,
			tg2: true,
			tg3: false,
			tg4: true
		};
	}

	render() {
		return (
			<View>
				<Text style={{ fontSize: 17, marginLeft: 10, marginBottom: 5, marginTop: 10 }}>Account</Text>
				<Text style={{ fontSize: 17, marginLeft: 10 }}>Subscription</Text>
				<Text style={{ marginBottom: 5, fontSize: 10, marginLeft: 10 }}>
					Free Pluralsight IQ (Limited Library)
				</Text>
				<Text style={{ fontSize: 17, marginLeft: 10, marginBottom: 5 }}>Communication Preferences</Text>
				<Text style={{ fontSize: 17, marginLeft: 10, marginBottom: 5 }}>Default caption language</Text>
				<Text style={{ marginBottom: 5, fontSize: 10, marginLeft: 10 }}>English</Text>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Text style={{ fontSize: 17, marginLeft: 10, marginBottom: 5 }}>Require Wi-Fi for streaming</Text>
					<Switch
						trackColor={{ false: '#767577', true: '#81b0ff' }}
						thumbColor={this.state.tg1 ? '#f5dd4b' : '#f4f3f4'}
						ios_backgroundColor="#3e3e3e"
						onValueChange={(value) => {
							this.setState({ tg1: value });
						}}
						value={this.state.tg1}
					/>
				</View>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Text style={{ fontSize: 17, marginLeft: 10, marginBottom: 5 }}>Require Wi-Fi for downloading</Text>
					<Switch
						trackColor={{ false: '#767577', true: '#81b0ff' }}
						thumbColor={this.state.tg2 ? '#f5dd4b' : '#f4f3f4'}
						ios_backgroundColor="#3e3e3e"
						onValueChange={(value) => {
							this.setState({ tg2: value });
						}}
						value={this.state.tg2}
					/>
				</View>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Text style={{ fontSize: 17, marginLeft: 10, marginBottom: 5 }}>Show quiz at the end of video</Text>
					<Switch
						trackColor={{ false: '#767577', true: '#81b0ff' }}
						thumbColor={this.state.tg3 ? '#f5dd4b' : '#f4f3f4'}
						ios_backgroundColor="#3e3e3e"
						onValueChange={(value) => {
							this.setState({ tg3: value });
						}}
						value={this.state.tg3}
					/>
				</View>

				<Text style={{ fontSize: 17, marginLeft: 10, marginBottom: 5 }}>Download location</Text>
				<Text style={{ marginBottom: 5, fontSize: 10, marginLeft: 10 }}>
					Default location (1.59 GB free of 22.29 GB)
				</Text>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Text style={{ fontSize: 17, marginLeft: 10, marginBottom: 5 }}>
						Recommended content push notifications
					</Text>
					<Switch
						trackColor={{ false: '#767577', true: '#81b0ff' }}
						thumbColor={this.state.tg4 ? '#f5dd4b' : '#f4f3f4'}
						ios_backgroundColor="#3e3e3e"
						onValueChange={(value) => {
							this.setState({ tg4: value });
						}}
						value={this.state.tg4}
					/>
				</View>

				<Text style={{ marginBottom: 5, fontSize: 10, marginLeft: 10 }}>
					Receive notifications about recommended content
				</Text>
				<Text style={{ fontSize: 17, marginLeft: 10, marginBottom: 5 }}>Captions</Text>
				<Text style={{ fontSize: 17, marginLeft: 10, marginBottom: 5 }}>Notifications</Text>
			</View>
		);
	}
}
