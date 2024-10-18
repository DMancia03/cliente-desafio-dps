import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const SolicitudResumen = ({ solicitud, verSolicitud }) => {
    return (
        <View>
            <Text>{solicitud.nombre}</Text>
            <Text>{solicitud.telefono}</Text>
            <Text>{solicitud.estado}</Text>
            <TouchableOpacity onPress={() => {verSolicitud(solicitud)}}>
                <Text>Ver detalle</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SolicitudResumen;