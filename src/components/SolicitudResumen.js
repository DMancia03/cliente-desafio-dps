import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../styles/colors";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SolicitudResumen = ({ solicitud, verSolicitud }) => {
    return (
        <View style={styles.container}>
            <Text><Text style={styles.bolder}>Cliente:</Text> {solicitud.nombre}</Text>
            <Text><Text style={styles.bolder}>Teléfono:</Text> {solicitud.telefono}</Text>
            <Text><Text style={styles.bolder}>Estado de solicitud:</Text> {solicitud.estado}</Text>
            <TouchableOpacity style={styles.buttonDetails} onPress={() => {verSolicitud(solicitud)}}>
                <Text style={styles.buttonDetailsText}><Icon name="eye" size={20} /> Ver detalle</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SolicitudResumen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.WHITE,
        borderRadius: 10,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    },
    buttonDetails: {
        backgroundColor: colors.PRYMARY_COLOR,
        padding: 10,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonDetailsText: {
        color: colors.WHITE,
    },
    bolder: {
        fontWeight: 'bold'
    }
})