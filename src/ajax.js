const axios = require('axios').default;

const apiHost = 'https://bakesaleforgood.com';

export async function fetchInitialDeals() {
	try {
		const response = await axios.get(apiHost + '/api/deals');
		const data = await response.data;
		console.log(response);
		return data;
	} catch (error) {
		console.error(error);
	}
}
