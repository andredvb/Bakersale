import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface SearchBarProps {
	searchDeals: (searchDeals: string | null) => void;
}

export default function SearchBar({ searchDeals }: SearchBarProps) {
	const [searchTerm, setSearchTerm] = useState<string>('');

	useEffect(() => {
		searchDeals(searchTerm);
	}, [searchTerm, searchDeals]);

	const setDeals = (searchText: string) => {
		console.log('onchange: ' + searchText);
		setSearchTerm(searchText);
	};
	return (
		<TextInput placeholder="Search All Deals" style={styles.input} onChangeText={setDeals} />
	);
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 10,
		borderWidth: 0.5,
		borderRadius: 10,
		padding: 5,
	},
});
