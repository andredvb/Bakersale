import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import DealItem, { DealItemProps } from './DealItem';

type DealListProps = {
	deals: Array<DealItemProps>;
};

const DealList = ({ deals }: DealListProps) => {
	return (
		<View style={styles.list}>
			<FlatList
				data={deals}
				renderItem={({ item }) => (
					<DealItem
						cause={item.cause}
						dealKey={item.dealKey}
						media={item.media}
						price={item.price}
						title={item.title}
					/>
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
