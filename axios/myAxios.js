import axios from 'axios';
import { AsyncStorage } from 'react-native';
const _retrieveData = async (key, config) => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value !== null) {
			// We have data!!
			console.log('token localStore', value);
			config.headers.common = {
				Authorization: `Bearer ${value}`
			};
			console.log('config', config);
			return config;
		}
		return config;
	} catch (error) {
		return config;
		// Error retrieving data
	}
};

const instance = axios.create({
	baseURL: 'https://api.itedu.me'
});

instance.interceptors.request.use((config) => {
	return _retrieveData('token', config);
});

export default instance;
