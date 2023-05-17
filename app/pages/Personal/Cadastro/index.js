import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import AuthService from "../../../services/AuthService";


const CadastroPersonal = ({navigation}) => {
    const [usuario, setUsuario] = useState({
        email: "",
        senha: "",
    })

    async function cadastrar() {
        try {
            const userCredential = await AuthService.createUser(usuario.email, usuario.senha)
            const user = userCredential.user;
            navigation.navigate("Login")
        } catch(error) {
            alert(`Erro: ${error.code} - ${error.message}`);
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.cima}>
                <View style={styles.conteudoCima}>
                    <View style={styles.esqCima}>
                        <View style={styles.logo}></View>
                        <View style={styles.name}>
                            <Text style={styles.textName}>PersonalPro</Text>
                        </View>
                    </View>
                    <View style={styles.dirCima}>
                        <TouchableOpacity>
                            <Icon name="menu" size={40} color="#FBFBFB"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.baixo}>
                <View style={styles.header}>
                    <Icon name="account-circle" size={35} color="#650808"/>
                    <Text style={styles.textHeader}>Cadastro</Text>
                </View>
                <View style={styles.conteudoBaixo}>
                    <TextInput 
                        style={styles.input}
                        placeholder="E-mail"
                        onChangeText={(email) => setUsuario({...usuario, email})}
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder="Confirmar E-mail"
                        
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder="Senha"
                        secureTextEntry
                        onChangeText={(senha) => setUsuario({...usuario, senha})}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {cadastrar()}}
                    >
                        <Text style={styles.textoBotao}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cima: {
        width: '100%',
        height: 100,
        backgroundColor: '#ED4747',
        borderRadius: 30,  
    },
    conteudoCima: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 45,
        width: '100%',
        justifyContent: 'space-between'
    },
    esqCima: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    dirCima: {
        marginRight: 40,
    },
    textName: {
        fontSize: 20,
        color: '#650808',
    },
    logo: {
        width: 40,
        height: 40,
        backgroundColor: '#FBFBFB',
        borderRadius: 40,
    },
    name: {
        marginLeft: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoName: {
        fontSize: 12,
        color: '#650808',
    },
    baixo: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FBFBFB',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        marginTop: 30,
        marginLeft: 30,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textHeader: {
        fontSize: 24,
        color: '#650808',
        marginLeft: 10
    },
    conteudoBaixo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    input: {
        width: '80%',
        borderBottomWidth: 4,
        borderRadius: 9,
        borderColor: '#ED4747',
        padding: 15,
        height: 50,
        marginTop: 30,
        color: '#650808'
    },
    button: {
        padding: 10,
        backgroundColor: '#ED4747',
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9,
        marginTop: 60,
    },
    textoBotao: {
        fontSize: 20,
        color: '#650808',
    },
});

export default CadastroPersonal;