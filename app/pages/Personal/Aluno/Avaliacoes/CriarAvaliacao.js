import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { criarAvaliacao } from "../../../../services/AlunoService";
import { AuthContext } from "../../../../../App";


const CriarAvaliacao = ({route, navigation}) => {
    const aluno = route.params;

    const [avaliacao, setAvaliacao] = useState({
        nome: "Avaliacao x",
    })

    const {user} = useContext(AuthContext);

    const cadastrar = () => {
        criarAvaliacao(user.uid, aluno.uid, avaliacao.nome)
        navigation.navigate("Avaliacoes", aluno);
    }

    return(
        <ScrollView>
            <TextInput 
                style={styles.input}
                placeholder="E-mail"
                onChangeText={(nome) => setAvaliacao({...avaliacao, nome})}
                value={avaliacao.nome}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {cadastrar()}}
            >
                <Text style={styles.textoBotao}>Adicionar Avaliação</Text>
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

export default CriarAvaliacao;