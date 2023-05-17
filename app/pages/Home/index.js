import React from "react";
import Login from "../Login";

import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Logo from "../../../assets/logo.png";
import Google from "../../../assets/google.png";


function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={Logo}/>
            <Text style={styles.titulo}>Personal Pro</Text>
            <Text style={styles.texto}>Acompanhamento inteligente para seus alunos</Text>
            <TouchableOpacity 
                onPress={() => {navigation.navigate(Login)}}
                style={styles.buttonn}
            >
                <Text style={styles.textoBotaoUm}>Continuar com email</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonG}  
            >
                <Text style={styles.textoBotaoDois}><Image source={Google}/>Continuar com Google</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    titulo: {
        fontWeight: 'bold',
        color: '#ED4747',
        fontSize: 48,
        marginVertical: 30,
    },
    texto: {
        color: '#FFE4E6',
        fontSize: 24,
        textAlign: 'center',
    },
    buttonn: {
        padding: 10,
        color: '#fff',
        backgroundColor: '#ED4747',
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9,
        marginTop: 30,
    },
    buttonG: {
        backgroundColor: '#fff',
        padding: 10,
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9,
        marginTop: 30,
    },
    textoBotaoUm: {
        fontSize: 20,
        color: '#650808',
    },
    textoBotaoDois: {
        fontSize: 20,
    },
});

export default Home;
