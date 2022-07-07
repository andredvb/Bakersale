import React, { useState, useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { priceDisplay } from '../priceDisplay';
import { fetchDealDetails } from '../ajax';
import { DealItemProps } from './DealItem';

export interface DetailedDealProps {
	deal: {
		availableQuantity?: number;
		cause: {
			name: string;
		};
		charity?: string;
		charityDescription?: string;
		charityName?: string;
		charityWebsite?: string;
		dealType?: string;
		description?: string;
		geoLocation?: string;
		makerPercentage?: number;
		key: string;
		media: Array<string>;
		price: number;
		title: string;
		tags?: string;
		url?: string;
		user?: {
			name?: string;
			avatar?: string;
		};
	};
}

const DealDetail = ({ deal, onPress }: DealItemProps) => {
	const [detailedDeal, setDetailedDeal] = useState<DetailedDealProps['deal']>(deal);

	useEffect(() => {
		const asyncWrapper = async () => {
			const fetchDealDetail = await fetchDealDetails(detailedDeal.key);
			setDetailedDeal(fetchDealDetail);
			console.log(detailedDeal);
		};
		asyncWrapper();
	}, []);

	return (
		<ScrollView>
			<View style={styles.container}>
				<TouchableOpacity onPress={() => onPress!(null)}>
					<Text style={styles.backLink}>Back</Text>
				</TouchableOpacity>
				<Image style={styles.image} source={{ uri: detailedDeal.media[0] }} />
				<View style={styles.info}>
					<Text style={styles.title}>{detailedDeal.title}</Text>
					<View style={styles.footerContainer}>
						{detailedDeal.user && (
							<View style={styles.price_user}>
								<View style={styles.price_info}>
									<Text style={styles.price}>
										{priceDisplay(detailedDeal.price)}
									</Text>
									<Text style={styles.cause}>{detailedDeal.cause.name}</Text>
								</View>
								<View style={styles.user_info}>
									<Image
										style={styles.avatar}
										source={{
											uri: detailedDeal.user.avatar,
										}}
									/>
									<Text>{detailedDeal.user.name}</Text>
								</View>
							</View>
						)}
						<View style={styles.description}>
							<Text style={styles.desc_format}>{detailedDeal.description}</Text>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		flex: 1,
		marginBottom: 30,
	},
	backLink: {
		marginBottom: 5,
		color: 'blue',
	},
	title: {
		padding: 10,
		textAlign: 'justify',
		backgroundColor: '#b8cec2',
		fontSize: 14,
		fontWeight: 'bold',
	},
	image: {
		width: '100%',
		height: 150,
	},
	info: {},
	footerContainer: {
		paddingTop: 20,
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	price_user: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	price_info: {
		alignItems: 'center',
	},
	user_info: {
		alignItems: 'center',
	},
	price: {
		fontSize: 14,
	},
	cause: {
		paddingTop: 10,
		fontSize: 11,
	},
	avatar: {
		width: 60,
		height: 60,
		borderRadius: 30,
	},
	description: {
		margin: 10,
		marginTop: 20,
		padding: 10,
		borderColor: '#ebecf0',
		borderWidth: 1,
		borderRadius: 10,
	},
	desc_format: {
		textAlign: 'justify',
	},
});

export default DealDetail;
