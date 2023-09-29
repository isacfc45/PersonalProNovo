import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

import { AlunoContext, AuthContext, TreinoContext } from "../../../../../App";
import { criarTreinoEspecifico } from "../../../../services/TreinoService";


const CriarTreinoEspecifico = ({navigation}) => {
    const {aluno} = useContext(AlunoContext);
    const {treino} = useContext(TreinoContext);

    const [treinoEspecifico, setTreinoEspecifico] = useState({
        nome: "Treino A",
        tipo: "Peitoral",
        observacoes: "Nenhuma"
    })

    const {user} = useContext(AuthContext);

    const cadastrar = (treinoEspecifico) => {
        criarTreinoEspecifico(user.uid, aluno.uid, treino.uid, treinoEspecifico)
        navigation.navigate("Treino");
    }

    return(
        <ScrollView>
            <TextInput 
                style={styles.input}
                placeholder="Nome"
                onChangeText={(nome) => setTreinoEspecifico({...treinoEspecifico, nome})}
                
            />
            <TextInput 
                style={styles.input}
                placeholder="Tipo"
                onChangeText={(tipo) => setTreinoEspecifico({...treinoEspecifico, tipo})}
                value={treino.tipo}
            />
            <TextInput 
                style={styles.input}
                placeholder="Observações"
                onChangeText={(observacao) => setTreinoEspecifico({...treinoEspecifico, observacao})}
                value={treino.observacao}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {cadastrar(treinoEspecifico)}}
            >
                <Text style={styles.textoBotao}>Adicionar Treino</Text>
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

export default CriarTreinoEspecifico;