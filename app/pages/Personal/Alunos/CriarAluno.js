import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import {criarUsuario} from '../../../services/AlunoService';
import { AuthContext } from "../../../../App";


const CriarAluno = ({navigation}) => {
    const [usuario, setUsuario] = useState({
        email: "aluno@aluno.com",
        senha: "123456",
    })

    const {user} = useContext(AuthContext);

    const cadastrar = () => {
        criarUsuario(user.uid, usuario.email, usuario.senha)
        navigation.navigate("Alunos");
    }

    return(
        <ScrollView>
            <TextInput 
                style={styles.input}
                placeholder="E-mail"
                onChangeText={(email) => setUsuario({...usuario, email})}
                value={usuario.email}
            />
            <TextInput 
                style={styles.input}
                placeholder="Senha"
                onChangeText={(senha) => setUsuario({...usuario, senha})}
                value={usuario.senha}
                secureTextEntry
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {cadastrar()}}
            >
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
        </ScrollView>
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

export default CriarAluno;