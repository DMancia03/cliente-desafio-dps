import React, { useState, useEffect } from "react";
import { View, Text, Alert, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";
import axios from "axios";
import colors from "../styles/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const VerSolicitud = ({ navigation, route }) => {
    //Variables
    const [solicitud, setSolicitud] = useState(route.params.data);

    //Funciones
    const guardarAprobacion = async () => {
        await axios.put('https://api-rest-desafio-dps-747620528393.us-central1.run.app/Solicitudes/aprobar/' + solicitud.idSolicitud)
        .then((response) => {
            Alert.alert('Aprobación', 'Solicitud aprobada correctamente');
            navigation.navigate('VerSolicitudes');
        })
        .catch((error) => {
            Alert.alert('Error', 'No se pudo aprobar la solicitud');
            console.error(error);
        });
    }

    const aprobarSolicitud = async () => {
        Alert.alert(
            'Aprobar solicitud', 
            '¿Está seguro de aprobar la solicitud?',
            [
                {
                    text: 'Aceptar',
                    onPress: () => {guardarAprobacion()}
                },
                {
                    text: 'Cancelar'
                }
            ]
        );
    }

    const guardarDenegacion = async () => {
        await axios.put('https://api-rest-desafio-dps-747620528393.us-central1.run.app/Solicitudes/rechazar/' + solicitud.idSolicitud)
        .then((response) => {
            Alert.alert('Denegación', 'Solicitud denegada correctamente');
            navigation.navigate('VerSolicitudes');
        })
        .catch((error) => {
            Alert.alert('Error', 'No se pudo denegar la solicitud');
            console.error(error);
        });
    }

    const denegarSolicitud = async () => {
        Alert.alert(
            'Denegar solicitud', 
            '¿Está seguro de denegar la solicitud?',
            [
                {
                    text: 'Aceptar',
                    onPress: () => {guardarDenegacion()}
                },
                {
                    text: 'Cancelar'
                }
            ]
        )
    }

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.main}>
                <Text><Text style={styles.bolder}>Cliente:</Text> {solicitud.nombre}</Text>
                <Text><Text style={styles.bolder}>Teléfono:</Text> {solicitud.telefono}</Text>
                <Text><Text style={styles.bolder}>Estado de solicitud:</Text> {solicitud.estado}</Text>
                <Text><Text style={styles.bolder}>Ingresos:</Text> ${solicitud.ingresos}</Text>
                <Text><Text style={styles.bolder}>Egresos:</Text> ${solicitud.egresos}</Text>
                <Text style={styles.bolder}>Carnet:</Text>
                <Image
                    source={{uri: solicitud.carnetBase64}}
                    width={'100%'}
                    height={200}
                />
                <Text style={styles.bolder}>Selfie:</Text>
                <Image
                    source={{uri: solicitud.selfieBase64}}
                    width={'100%'}
                    height={200}
                />
                <Text style={styles.bolder}>Producto:</Text>
                <View style={styles.buttonGroup}>
                    {
                        solicitud.estado == 'SOLICITADO' ?
                        (
                            <>
                                <TouchableOpacity style={styles.buttonYes} onPress={() => {aprobarSolicitud()}}>
                                    <Text><Icon name="check" size={20} /> Aprobar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonNo} onPress={() => {denegarSolicitud()}}>
                                    <Text><Icon name="cancel" size={20} /> Denegar</Text>
                                </TouchableOpacity>
                            </>
                        ) : (
                            <TouchableOpacity style={styles.buttonNo} onPress={() => {navigation.navigate('VerSolicitudes')}}>
                                <Text><Icon name="arrow-left-circle" size={20} /> Regresar</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
            </View>
        </ScrollView>
    );
}

export default VerSolicitud;

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: colors.GRAY_BACKGROUND
    },
    main: {
        backgroundColor: colors.WHITE,
        display: 'flex',
        flexDirection: 'column',
        margin: 20,
        gap: 20,
        padding: 20,
        borderRadius: 10
    },
    bolder: {
        fontWeight: 'bold'
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        gap: 20
    },
    buttonYes: {
        backgroundColor: colors.SAVE,
        padding: 10,
        borderRadius: 10,
    },
    buttonNo: {
        backgroundColor: colors.CANCEL,
        padding: 10,
        borderRadius: 10,
    }
})