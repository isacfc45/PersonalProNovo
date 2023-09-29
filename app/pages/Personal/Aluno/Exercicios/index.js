import React, { useContext, useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AlunoContext, AuthContext, TreinoContext, TreinoEspeficificoContext } from "../../../../../App";
import { buscarTreino, buscarTreinoEspecifico } from "../../../../services/TreinoService";
import { FlatList } from "react-native";
import { ResizeMode, Video } from "expo-av";


const Exercicios = ({navigation, route}) => {
    const {user} = useContext(AuthContext);
    const {aluno} = useContext(AlunoContext); 
    const {treinoEspecifico} = useContext(TreinoEspeficificoContext);   
    const treinoUid = route.params;

    const video = useRef(null);
    const [status, setStatus] = useState({});

    useEffect(()=>{
        buscar();
    }, [])
    
    const exercicios = [
        {
            uid: 1,
            nome: "Supino reto",
            video: "https://www.youtube.com/watch?v=SWVO95XzxKg",
            serie: 4,
            repeticoes: 12,
            intesidade: "alta",
            intervalo: 120,
            observacoes: "Nenhuma"
        },
        {
            uid: 2,
            nome: "Supino reto",
            video: "https://www.youtube.com/watch?v=SWVO95XzxKg",
            serie: 4,
            repeticoes: 12,
            intesidade: "alta",
            intervalo: 120,
            observacoes: "Nenhuma"
        },
        {
            uid: 3,
            nome: "Supino reto",
            video: "https://www.youtube.com/watch?v=SWVO95XzxKg",
            serie: 4,
            repeticoes: 12,
            intesidade: "alta",
            intervalo: 120,
            observacoes: "Nenhuma"
        },
        {
            uid: 4,
            nome: "Supino reto",
            video: "https://www.youtube.com/watch?v=SWVO95XzxKg",
            serie: 4,
            repeticoes: 12,
            intesidade: "alta",
            intervalo: 120,
            observacoes: "Nenhuma"
        },
    ]

    const buscar = async () => {
        const dado = await buscarTreinoEspecifico(user.uid, aluno.uid, treinoUid, treinoEspecifico.nome);
        setTreino(dado);
    }


    return(
        <ScrollView style={styles.container}>
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
                <View style={styles.avaliacaoCont}>
                    <Text style={styles.avaliacaoNome}>{treinoEspecifico.nome}</Text>
                    <Text style={styles.avaliacaoInfo}>{"avaliacao.data.seconds"}</Text>
                </View>
                <View style={styles.conteudoBaixo}>
                    <FlatList 
                        data={exercicios}
                        renderItem={ ({item}) => 
                            <View style={styles.cardExercicio}>
                                <Text style={styles.nomeExercicio}>{item.nome}</Text>
                                <View>
                                    <Video 
                                        ref={video}
                                        style={styles.video}
                                        source={{
                                            uri: "https://www.youtube.com/watch?v=SWVO95XzxKg"
                                        }}
                                        useNativeControls
                                        resizeMode={ResizeMode.CONTAIN}
                                        isLooping
                                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                                    />
                                </View>
                                <Text style={styles.labelExercicio}>Volume: <Text style={styles.valorExercicio}>{item.serie}X{item.repeticoes}</Text></Text>
                                <Text style={styles.labelExercicio}>Intensidade: <Text style={styles.valorExercicio}>{item.intesidade}</Text></Text>
                                <Text style={styles.labelExercicio}>Intervalo: <Text style={styles.valorExercicio}>{item.intervalo}s</Text></Text>
                                <Text style={styles.labelExercicio}>Observações: <Text style={styles.valorExercicio}>{item.observacoes}</Text></Text>
                            </View>
                        }
                        keyExtractor={item => item.data}
                        style={styles.flatList}
                    />
                    <View style={styles.Add}>
                        <TouchableOpacity 
                            style={styles.buttonAdd}
                            onPress={() => {navigation.navigate("AdicionarExercicio", treinoUid)}}    
                        >
                            <Icon name='add' size={30} color="#ED4747" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

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
    avaliacaoCont: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avaliacaoNome: {
        fontSize: 24,
        color: '#ED4747'
    },
    avaliacaoInfo: {
        color: '#650808'
    },
    conteudoBaixo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    flatList: {
        flex: 1,
        width: '100%',
        display: 'flex',
        padding: 20
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
    cardExercicio: {
        marginVertical: 10,
        borderColor: "#FFE4E6",
        borderWidth: 2,
        padding: 15,
        borderRadius: 10
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
    },
    nomeExercicio: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "#650808"
    },
    labelExercicio: {
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 5
    },
    valorExercicio: {
        fontWeight: 'normal'
    },
});

export default Exercicios;