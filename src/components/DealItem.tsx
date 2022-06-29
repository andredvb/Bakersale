import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { priceDisplay } from '../priceDisplay';

export interface DealItemProps {
	deal: {
		cause: {
			name: string;
		};
		key: string;
		media: Array<string>;
		price: number;
		title: string;
	};
	onPress: (dealID: string) => void;
}

const DealItem = ({ deal, onPress }: DealItemProps) => {
	const handlePress = () => {
		return;
	};
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => onPress(deal.key)}>
			<Image style={styles.image} source={{ uri: deal.media[0] }} />
			<View style={styles.info}>
				<Text style={styles.title}>{deal.title}</Text>
				<View style={styles.footerContainer}>
					<Text style={styles.cause}>{deal.cause.name}</Text>
					<Text style={styles.price}>{priceDisplay(deal.price)}</Text>
				</View>
			</View>
		</TouchableOpacity>
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
