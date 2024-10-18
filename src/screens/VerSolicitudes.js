import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import SolicitudResumen from '../components/SolicitudResumen';

const VerSolicitudes = ({ navigation, route }) => {
    const [solicitudes, setSolicitudes] = useState([]);
    const [recargarSolicitudes, setRecargarSolicitudes] = useState(false);

    const verSolicitud = (solicitud) => {
        navigation.navigate('VerSolicitud', { data: solicitud });
    }

    useEffect(() => {
        const obtenerSolicitudes = async () => {
            await axios.get('https://api-rest-desafio-dps-747620528393.us-central1.run.app/Solicitudes')
            .then((response) => {
                setSolicitudes(response.data);
                Alert.alert('Solicitudes', JSON.stringify(response.data));
            })
            .catch((error) => {
                Alert.alert('Error', 'No se pudieron obtener las solicitudes');
                console.error(error);
            });
        }

        obtenerSolicitudes();
    }, [recargarSolicitudes])

    return (
        <View>
            <TouchableOpacity>
                <Text>Recargar solicitudes</Text>
            </TouchableOpacity>

            <FlatList
                data={solicitudes}
                key={(item) => item.idSolicitud}
                renderItem={({ item }) => <SolicitudResumen solicitud={item} verSolicitud={verSolicitud} />}
            />
        </View>
    )
}

export default VerSolicitudes;