import React, { Component, Fragment } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { StyleSheet, View, TouchableOpacity, Text, FlatList, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import AuthorCircle from '../components/authorCircle/AuthorCircle';
import axios from '../axios/myAxios';

var items = [
	{
		id: 1,
		name: 'JavaScript'
	},
	{
		id: 2,
		name: 'Java'
	},
	{
		id: 3,
		name: 'Ruby'
	},
	{
		id: 4,
		name: 'React Native'
	},
	{
		id: 5,
		name: 'PHP'
	},
	{
		id: 6,
		name: 'Python'
	},
	{
		id: 7,
		name: 'Go'
	},
	{
		id: 8,
		name: 'Swift'
	}
];
export default class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listItems: [],
			selectedItems: [],
			loading: false,
			render: 1,
			coursesData: []
		};
		this.textInput = '';
	}
	componentDidMount() {}
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
							<Text style={{ color: 'white' }}>ALL</Text>
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
							<Text style={{ color: 'white' }}>COURSES</Text>
						</TouchableOpacity>
						<View style={{ height: this.state.render === 2 ? 3 : 0, backgroundColor: 'white' }} />
					</View>
					<View style={{ backgroundColor: '#2590e9', flex: 1 }}>
						<TouchableOpacity
							style={{ height: 40, justifyContent: 'center', alignItems: 'center' }}
							onPress={() => this.setState({ render: 3 })}
						>
							<Text style={{ color: 'white' }}>AUTHORS</Text>
						</TouchableOpacity>
						<View style={{ height: this.state.render === 3 ? 3 : 0, backgroundColor: 'white' }} />
					</View>
				</View>
			</View>
		);
	};
	topAuthor = () => {
		return (
			<View style={{ height: 180, marginTop: 20, marginBottom: 5, width: '100%' }}>
				<Text
					style={{
						marginLeft: 5,
						marginBottom: 10,
						fontWeight: 'bold',
						marginTop: 5,
						fontSize: 15,
						color: 'white'
					}}
				>
					Authors
				</Text>
				<FlatList
					data={this.state.lisAuthors}
					horizontal={true}
					renderItem={({ item }) => (
						<AuthorCircle {...this.props} {...item} style={{ marginRight: 10 }} colorText="white" />
					)}
					keyExtractor={(item, index) => index}
					showsHorizontalScrollIndicator={false}
				/>
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
	render() {
		return (
			<View style={styles.mainView}>
				{/* Multi */}
				{this.state.loading ? (
					<View />
				) : (
					<View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
						<SearchableDropdown
							multi={true}
							selectedItems={this.state.selectedItems}
							onItemSelect={(item) => {
								axios
									.post('/course/search', {
										keyword: this.textInput,
										opt: {
											category: []
										},
										limit: 20,
										offset: 0
									})
									.then((response) => {
										console.log('search', response.data.payload.rows);
										this.setState({
											coursesData: response.data.payload.rows
										});
									});
								axios
									.get('/instructor')
									.then((res) => {
										this.setState({ lisAuthors: res.data.payload });
									})
									.catch((error) => console.log(error));
								// alert(item.name);
								// const items = this.state.selectedItems;
								// items.push(item);
								// this.setState({ selectedItems: items });
							}}
							containerStyle={{ padding: 5 }}
							onRemoveItem={(item, index) => {
								const items1 = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
								const items2 = this.state.listItems.filter((sitem) => sitem.id !== item.id);
								this.setState({ listItems: items2, selectedItems: items1, loading: true }, () => {
									this.setState({ loading: false });
									alert(`Xóa ${item.name} thành công`);
								});
							}}
							itemStyle={{
								padding: 10,
								marginTop: 2,
								backgroundColor: '#ddd',
								borderColor: '#bbb',
								borderWidth: 1,
								borderRadius: 5
							}}
							itemTextStyle={{ color: '#222' }}
							itemsContainerStyle={{ maxHeight: 140 }}
							items={this.state.listItems}
							defaultIndex={0}
							chip={false}
							resetValue={false}
							textInputProps={{
								placeholder: 'Tìm kiếm bằng tên khóa học hoặc tên tác giả ...',
								underlineColorAndroid: 'transparent',
								style: {
									padding: 12,
									borderWidth: 1,
									borderColor: '#ccc',
									borderRadius: 5
								},
								onTextChange: (text) => {
									this.textInput = text;
									// this.setState({ value: text });
								}
							}}
							listProps={{
								nestedScrollEnabled: true
							}}
						/>
						<TouchableOpacity
							style={{
								backgroundColor: '#2590e9',
								paddingHorizontal: 10,
								borderRadius: 20,

								marginTop: 20
							}}
							onPress={() => {
								const list = [
									...this.state.listItems,
									{ id: this.state.listItems.length, name: this.textInput }
								];
								this.setState({ selectedItems: list, listItems: list });
								axios
									.post('/course/search', {
										keyword: this.textInput,
										opt: {
											category: []
										},
										limit: 20,
										offset: 0
									})
									.then((response) => {
										console.log('search', response.data.payload.rows);
										this.setState({
											coursesData: response.data.payload.rows
										});
									});
								axios
									.get('/instructor')
									.then((res) => {
										this.setState({ lisAuthors: res.data.payload });
									})
									.catch((error) => console.log(error));
							}}
						>
							<Text style={{ color: 'white' }}>Find</Text>
						</TouchableOpacity>
					</View>
				)}
				{this.renderComponent2()}
				<ScrollView style={{ flex: 1, backgroundColor: '#1788e6' }}>
					{this.state.render === 1 || this.state.render === 2 ? (
						<View style={{ backgroundColor: '1788e6', flex: 1 }}>
							<Text
								style={{
									marginLeft: 5,
									marginBottom: 10,
									fontWeight: 'bold',
									marginTop: 5,
									fontSize: 15,
									color: 'white'
								}}
							>
								Courses
							</Text>
							<View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
								{this.state.coursesData.map((item, index) => this.renderItem(item, index))}
							</View>
						</View>
					) : null}

					{this.state.render === 1 || this.state.render === 3 ? this.topAuthor() : null}
				</ScrollView>
				{/* Single */}
				{/* <SearchableDropdown
					multi={true}
					selectedItems={this.state.selectedItems}
					onItemSelect={(item) => {
						const items = this.state.selectedItems;
						alert(item.name);
						items.push(item);
						this.setState({ selectedItems: items });
					}}
					containerStyle={{ padding: 5 }}
					onRemoveItem={(item, index) => {
						const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
						this.setState({ selectedItems: items });
					}}
					itemStyle={{
						padding: 10,
						marginTop: 2,
						backgroundColor: '#ddd',
						borderColor: '#bbb',
						borderWidth: 1,
						borderRadius: 5
					}}
					itemTextStyle={{ color: '#222' }}
					itemsContainerStyle={{ maxHeight: 140 }}
					items={items}
					defaultIndex={2}
					resetValue={false}
					textInputProps={{
						placeholder: 'placeholder',
						underlineColorAndroid: 'transparent',
						style: {
							padding: 12,
							borderWidth: 1,
							borderColor: '#ccc',
							borderRadius: 5
						},
						onTextChange: (text) => alert(text)
					}}
					listProps={{
						nestedScrollEnabled: true
					}}
				/> */}
			</View>
		);
	}
}
Search.navigationOptions = (props) => {
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
	headerRight: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingRight: 10
	},
	mainView: {
		flex: 1
	}
});
