import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons';
import Aluno from '../Aluno';
import CriarAluno from './CriarAluno';
import { buscarAlunos } from '../../../services/AlunoService';
import { AuthContext } from '../../../../App';
import ListarAlunos from './components/ListarAlunos';
import { FlatList } from 'react-native-gesture-handler';

const Alunos = ({navigation}) => {
    const {user} = useContext(AuthContext);
    const [lista, setLista] = useState([]);

    useEffect(() => {
        listar();
    }, []);
    


    const listar = async() => {

        // lista = await buscarAlunos(user.id);

        const dados = await buscarAlunos(user.uid);
        setLista(dados);
    }

    return(
        <View style={styles.container}>
            <View style={styles.cima}>
                <View style={styles.conteudoCima}>
                    <View style={styles.esqCima}>
                        <View style={styles.logo}></View>
                        <View style={styles.name}>
                            <Text style={styles.textName}>Peronsal Fulano</Text>
                            <Text style={styles.infoName}>CREF: 111111-G</Text>
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
                    <Icon name="people" size={35} color="#650808"/>
                    <Text style={styles.textHeader}>Alunos</Text>
                </View>
                <View style={styles.conteudoBaixo}>
                    <FlatList 
                        data={lista}
                        renderItem={ ({item}) => 
                            <TouchableOpacity 
                                style={styles.cardAluno}
                                onPress={() => {navigation.navigate("Aluno" , item)}}
                            >
                                <View style={styles.esqCardAluno}>
                                    <View style={styles.fotoAluno}>
                                        <Icon name='location-history' size={50} color="#650808" />
                                    </View>
                                    <View style={styles.infoAluno}>
                                        <Text style={styles.nomeAluno}>{item.email}</Text>
                                        <Text style={styles.dataAvaliação}>{item.uid}</Text>
                                    </View>
                                </View>
                                <View style={styles.dirCardAluno}>
                                    <TouchableOpacity>
                                        <Icon name='assignment' size={30} color="#650808"/>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Icon name='multitrack-audio' size={30} color="#650808"/>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor={item => item.uid}
                        style={styles.fletList}
                    />
                    
                    <View style={styles.Add}>
                        <TouchableOpacity 
                            style={styles.buttonAdd}
                            onPress={() => {navigation.navigate(CriarAluno)}}    
                        >
                            <Icon name='add' size={30} color="#ED4747" />
                        </TouchableOpacity>
                    </View>
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
        color: '#FBFBFB',
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
    fletList: {
        flex: 1,
        width: '100%',
        display: 'flex',
        marginLeft: 40,
        marginTop: 30,
    },
    cardAluno: {
        width: '90%',
        height: 70,
        backgroundColor: "#FFE4E6",
        borderRadius: 24,
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10
    },
    esqCardAluno: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fotoAluno: {
        width: 50,
        height: 50,
        backgroundColor: '#FBFBFB',
        borderRadius: 60 
    },
    infoAluno: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    nomeAluno: {
        fontSize: 16,
        color: '#ED4747'
    },
    dataAvaliação: {
        fontSize: 12,
        color: '#650808'
    },
    dirCardAluno: {
        display: 'flex',
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: 20
    },
    Add: {
        width: '100%',
        alignItems: 'flex-end'
    },
    buttonAdd: {
        width: 50,
        height: 50,
        backgroundColor: '#650808',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30,
    },
})

export default Alunos;