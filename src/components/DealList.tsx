import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import DealItem, { DealItemProps } from './DealItem';

type DealListProps = {
	deals: Array<DealItemProps['deal']>;
	onItemPress: (dealID: string | null) => void;
};

const DealList = ({ deals, onItemPress }: DealListProps) => {
	return (
		<View style={styles.list}>
			<FlatList
				data={deals}
				renderItem={({ item }) => <DealItem deal={item} onPress={onItemPress} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	list: {
		backgroundColor: '#eee',
		width: '100%',
	},
});

export default DealList;
