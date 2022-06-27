import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { priceDisplay } from '../priceDisplay';

export type DealItemProps = {
	cause: {
		name: string;
	};
	dealKey: string;
	media: Array<string>;
	price: number;
	title: string;
};

const DealItem = ({ cause, dealKey, media, price, title }: DealItemProps) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={{ uri: media[0] }} />
			<View style={styles.info}>
				<Text style={styles.title}>{title}</Text>
				<View style={styles.footerContainer}>
					<Text style={styles.cause}>{cause.name}</Text>
					<Text style={styles.price}>{priceDisplay(price)}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 10,
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

export default DealItem;
