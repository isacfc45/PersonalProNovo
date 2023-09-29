import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

import AuthService from "../../services/AuthService";
import CadastroPersonal from "../Personal/Cadastro";
import { AuthContext } from "../../../App";



function Login({ navigation }) {
    const {user, auth} = useContext(AuthContext);
    
    const [usuario, setUsuario] = useState({
        email: "teste@teste.com",
        senha: "123456",
    });

    async function autenticar() {
        try {
            // const userCredential = await AuthService.auth(
            //     usuario.email,
            //     usuario.senha
            // );
            //     const user = userCredential.user;

            await auth(usuario.email, usuario.senha)
            // navigation.navigate("Dashboard");
            } catch (error) {
                alert(`Erro: ${error.code} - ${error.message}`);
            }
    }

    return (
        <View style={styles.container}>
            <View style={styles.cima}>

            </View>
            <View style={styles.baixo}>
                <View style={styles.conteudo}>
                    <View style={styles.logo}>
                        <Text style={styles.titulo}>Logo</Text>
                    </View>
                    
                    <TextInput 
                        style={styles.input}
                        onChangeText={(email) => setUsuario({ ...usuario, email })}
                        placeholder="E-mail"
                        value={usuario.email}
                    />
                    <TextInput 
                        style={styles.input}
                        onChangeText={(senha) => setUsuario({ ...usuario, senha })}
                        placeholder="Senha"
                        secureTextEntry
                        value={usuario.senha}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {autenticar()}}
                    >
                    <Text style={styles.textoBotao}>Entrar</Text>
                    </TouchableOpacity>
                    <Text 
                        style={styles.texto}
                        onPress={() => {navigation.navigate("CadastroPersonal")}}
                    >
                        Criar conta
                    </Text>                    
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
        // fontFamily: 'Roboto-Regular'
    },
    cima: {
        width: '100%',
        height: 300,
        backgroundColor: '#ED4747',
        borderRadius: 40,
        
    },
    baixo: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FBFBFB',
        alignItems: 'center',
    },
    conteudo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        marginTop: -130,
        width: '90%'
    },
    logo: {
        backgroundColor: '#650808',
        width: 200,
        height: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 200
    },
    titulo: {
        fontWeight: 'bold',
        color: '#c6d6d6',
        fontSize: 48,
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
    texto: {
        fontSize: 20,
        color: '#650808',
        marginTop: 100,
        borderBottomWidth: 3,
        borderBottomColor: '#ED4747',
        padding: 10,
        borderRadius: 9,
    },
});

export default Login;
