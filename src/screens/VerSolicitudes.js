import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Alert, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import SolicitudResumen from '../components/SolicitudResumen';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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
            })
            .catch((error) => {
                Alert.alert('Error', 'No se pudieron obtener las solicitudes');
                console.error(error);
            });
        }

        obtenerSolicitudes();
    }, [recargarSolicitudes])

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.main}>
                <TouchableOpacity style={styles.buttonReload} onPress={() => setRecargarSolicitudes(!recargarSolicitudes)}>
                    <Text style={styles.buttonReloadText}><Icon name='reload' size={20} color={colors.WHITE} /> Recargar solicitudes</Text>
                </TouchableOpacity>

                {
                    solicitudes.length > 0 ? solicitudes.map((item, index) => (<SolicitudResumen solicitud={item} verSolicitud={verSolicitud} key={item.idSolicitud} />))
                    : <Text>No hay solicitudes</Text>
                }
            </View>
        </ScrollView>
    )
}

export default VerSolicitudes;

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: colors.GRAY_BACKGROUND
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        padding: 30,
    },
    buttonReload: {
        backgroundColor: colors.SECONDARY_COLOR,
        padding: 20,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonReloadText: {
        color: colors.WHITE,
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
    }
})