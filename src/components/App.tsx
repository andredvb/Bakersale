import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchInitialDeals } from '../ajax';
import DealDetail from './DealDetail';
import { DealItemProps } from './DealItem';
import DealList from './DealList';

export const App = () => {
	const [deals, setDeals] = useState<Array<DealItemProps['deal']>>([]);
	const [currentDealId, setCurrentDealId] = useState<string | null>(null);

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

	if (currentDealId) {
		return <DealDetail initialDealDetail={currentDeal()!} />;
	}
	if (deals.length > 0) {
		return <DealList deals={deals} onItemPress={setCurrentDealId} />;
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
});

export default App;
