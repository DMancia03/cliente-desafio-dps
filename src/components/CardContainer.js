import React from "react";
import colors from "../styles/colors";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';

const CardContainer = ({card}) => {
    const showDescriptionCard = (descriptionCard) => {
        Alert.alert('Tipo', descriptionCard);
    }

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={() => {showDescriptionCard(card.description)}}>
            <Image source={card.image} style={styles.card}/>
        </TouchableOpacity>
    )
}

export default CardContainer;

const styles = StyleSheet.create({
    cardContainer: {
        margin:20,
        flex:1,
    },
    card: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
});