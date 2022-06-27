import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchInitialDeals } from '../ajax';
import DealList from './DealList';

export const App = () => {
	const [deals, setDeals] = useState([]);

	useEffect(() => {
		const asyncWrapper = async () => {
			const temp = await fetchInitialDeals();
			setDeals(temp);
		};
		asyncWrapper();
	}, []);

	console.log(deals);
	return (
		<View style={styles.container}>
			{deals.length > 0 ? (
				<DealList deals={deals} />
			) : (
				<Text style={styles.header}>Bakersale</Text>
			)}
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
