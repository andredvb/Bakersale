import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { priceDisplay } from '../priceDisplay';

export interface DealDetailProps {
	initialDealDetail: {
		cause: {
			name: string;
		};
		key: string;
		media: Array<string>;
		price: number;
		title: string;
	};
}

const DealDetail = ({ initialDealDetail }: DealDetailProps) => {
	const [detailedDeal, setDeal] =
		useState<DealDetailProps['initialDealDetail']>(initialDealDetail);

	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={{ uri: detailedDeal.media[0] }}
			/>
			<View style={styles.info}>
				<Text style={styles.title}>{detailedDeal.title}</Text>
				<View style={styles.footerContainer}>
					<Text style={styles.cause}>{detailedDeal.cause.name}</Text>
					<Text style={styles.price}>
						{priceDisplay(detailedDeal.price)}
					</Text>
				</View>
			</View>
			<Text>...</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
		marginLeft: 10,
		marginRight: 10,
		flex: 1,
	},
	title: {
		fontSize: 14,
		fontWeight: 'bold',
	},
	image: {
		width: '100%',
		height: 150,
	},
	info: {
		padding: 10,
		backgroundColor: 'white',
		borderColor: 'grey',
		borderWidth: 1,
		borderTopWidth: 0,
	},
	footerContainer: {
		paddingTop: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	price: {
		fontSize: 13,
	},
	cause: {
		fontSize: 10,
	},
});

export default DealDetail;
