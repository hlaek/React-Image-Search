import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID c94bb27fc23ec6265653c5541fcee0876d7e4a0d8bcb73843f1aa05bd6287a32'
	}
});

