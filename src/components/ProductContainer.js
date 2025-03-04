import React from "react";
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import colors from "../styles/colors";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProductContainer = ({ product }) => {
    const navigation = useNavigation(); // Obtén la función de navegación

    const handlePress = (producto) => {
        navigation.navigate('RegistroSolicitud', { producto }); // Navegar a RegistroSolicitud pasando el producto seleccionado
    };

    return (
        <TouchableOpacity style={styles.productContainer} onPress={() => handlePress(product.title)}>
            <View style={styles.productContainer_Header}>
                <Text style={styles.productContainer_Title}>{product.title}</Text>
            </View>
            <View style={styles.container_body}>
                {product.items.length > 0 ? (
                    product.items.map((item, index) => (
                        <Text key={item.id}>
                            <Icon name={item.icon} size={20} /> <Text>{item.description}</Text>
                        </Text>
                    ))
                ) : (
                    <Text>
                        <Icon name={product.message_no_products.icon} size={20} /> 
                        <Text>{product.message_no_products.description}</Text>
                    </Text>
                )}
            </View>
        </TouchableOpacity>
    );
};

export default ProductContainer;

const styles = StyleSheet.create({
    productContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        backgroundColor: colors.WHITE,
        borderRadius: 15,
        padding: 20,
    },
    productContainer_Header: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
    },
    productContainer_Title: {
        fontSize: 20,
    },
    container_body: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },
    container_body_line: {
        display: 'flex',
        flexDirection: 'row',
    },
});