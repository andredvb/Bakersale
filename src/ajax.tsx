const axios = require('axios').default;

const apiHost = 'https://bakesaleforgood.com';

export async function fetchInitialDeals() {
	try {
		const response = await axios.get(apiHost + '/api/deals');
		const data = await response.data;
		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function fetchDealDetails(dealId: string) {
	try {
		const response = await axios.get(apiHost + '/api/deals/' + dealId);
		const data = await response.data;
		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function fetchDealsSearchResults(searchTerm: string) {
	try {
		const response = await axios.get(apiHost + '/api/deals?searchTerm=' + searchTerm);
		const data = await response.data;
		return data;
	} catch (error) {
		console.error(error);
	}
}
