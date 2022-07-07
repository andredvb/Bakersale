import debounce from 'lodash.debounce';
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchInitialDeals, fetchDealsSearchResults } from '../ajax';
import DealDetail from './DealDetail';
import { DealItemProps } from './DealItem';
import DealList from './DealList';
import SearchBar from './SearchBar';

export const App = () => {
	const [deals, setDeals] = useState<Array<DealItemProps['deal']>>([]);
	const [currentDealId, setCurrentDealId] = useState<string | null>(null);
	const [dealsFromSearch, setDealsFromSearch] = useState<Array<DealItemProps['deal']>>([]);

	useEffect(() => {
		const asyncWrapper = async () => {
			const temp = await fetchInitialDeals();
			setDeals(temp);
		};
		asyncWrapper();
	}, []);

	const currentDeal = () => {
		return deals.find((deal) => deal.key === currentDealId);
	};

	const searchDeals = useCallback(
		debounce(async (searchTerm: string | null) => {
			console.log('searchDeal ' + searchTerm);
			let dealsSearch = [];
			if (searchTerm) {
				dealsSearch = await fetchDealsSearchResults(searchTerm);
			}
			setDealsFromSearch(dealsSearch);
		}, 350),
		[],
	);

	const dealsToDisplay = dealsFromSearch.length > 0 ? dealsFromSearch : deals;

	if (currentDealId) {
		return (
			<View style={styles.main}>
				<DealDetail deal={currentDeal()!} onPress={setCurrentDealId} />
			</View>
		);
	}
	if (dealsToDisplay.length > 0) {
		return (
			<View style={styles.main}>
				<SearchBar searchDeals={searchDeals} />
				<DealList deals={dealsToDisplay} onItemPress={setCurrentDealId} />
			</View>
		);
	}
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Bakersale</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		fontSize: 40,
	},
	main: {
		marginTop: 50,
		marginBottom: 100,
		flex: 1,
	},
});

export default App;
