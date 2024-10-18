import React, { useState, useEffect } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";

const VerSolicitud = ({ navigation, route }) => {
    const [solicitud, setSolicitud] = useState(route.params.data);

    return (
        <View>
            <Text>{solicitud.nombre}</Text>
            <Text>{solicitud.telefono}</Text>
            <Text>{solicitud.estado}</Text>
            <TouchableOpacity>
                <Text>Aceptar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Denegar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default VerSolicitud;