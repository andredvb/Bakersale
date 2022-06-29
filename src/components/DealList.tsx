import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import DealItem, { DealItemProps } from './DealItem';

type DealListProps = {
	deals: Array<DealItemProps['deal']>;
	onItemPress: (dealID: string) => void;
};

const DealList = ({ deals, onItemPress }: DealListProps) => {
	return (
		<View style={styles.list}>
			<FlatList
				data={deals}
				renderItem={({ item }) => (
					<DealItem deal={item} onPress={onItemPress} />
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	list: {
		backgroundColor: '#eee',
		flex: 1,
		width: '100%',
		paddingTop: 50,
	},
});

export default DealList;
