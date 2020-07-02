import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://itedu-user-api.herokuapp.com'
});

export default instance;
