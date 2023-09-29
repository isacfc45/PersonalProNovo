import React, { useContext, useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { buscarTreinos } from '../../../../services/TreinoService';
import { AlunoContext, AuthContext, TreinoContext } from '../../../../../App';
import { useIsFocused } from '@react-navigation/native';


const Treinos = ({navigation}) => {
    const {user} = useContext(AuthContext);
    const isVisible = useIsFocused();
   

    const {aluno} = useContext(AlunoContext);
    const {treino, setTreino} = useContext(TreinoContext);

    const selectionarTreino = (treino) => {
        setTreino(treino);
        navigation.navigate("Treino")
    }

    const [treinos, setTreinos] = useState([]);

    useEffect(() => {
        buscar();
    },[isVisible])


    const buscar = async() => {
        const dados = await buscarTreinos(user.uid, aluno.uid);
        setTreinos(dados);
    }

    return(
        <View style={styles.container}>
            <View style={styles.cima}>
                <View style={styles.conteudoCima}>
                    <View style={styles.esqCima}>
                        <View style={styles.logo}></View>
                        <View style={styles.name}>
                            <Text style={styles.textName}>{user.email}</Text>
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
                    <Icon name="location-history" size={35} color="#650808"/>
                    <Text style={styles.textHeader}>{aluno.email}</Text>
                </View>
                <View style={styles.conteudoBaixo}>
                    <FlatList 
                        data={treinos}
                        renderItem={ ({item}) => 
                            <TouchableOpacity 
                                style={styles.cardAluno}
                                onPress={() => {selectionarTreino(item)}}
                            >
                                <View style={styles.esqCardAluno}>
                                    <View style={styles.fotoAluno}>
                                        <Icon name='assignment' size={45} color="#650808" />
                                    </View>
                                    <View style={styles.infoAluno}>
                                        <Text style={styles.nomeAluno}>{item.nome}</Text>
                                        <View>
                                            <Text style={styles.dataAvaliação}>Data Inicio: {"item.dataInicio.seconds"}</Text>
                                            <Text style={styles.dataAvaliação}>Data Fim: {"item.dataFim.seconds"}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor={item => item.data}
                        style={styles.fletList}
                    />
                    <View style={styles.Add}>
                        <TouchableOpacity 
                            style={styles.buttonAdd}
                            onPress={() => {navigation.navigate("CriarTreino")}}    
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
        borderRadius: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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

export default Treinos;