import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Anamnese from "./Anamnese";
import Antropometria from "./Antropometria";
import Dobras from "./Dobras";


const Avaliacao = ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
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
                    <Icon name="location-history" size={35} color="#650808"/>
                    <Text style={styles.textHeader}>Leonan Teixeira</Text>
                </View>
                <View style={styles.avaliacaoCont}>
                    <Text style={styles.avaliacaoNome}>Avaliação 1</Text>
                    <Text style={styles.avaliacaoInfo}>05/05/2023</Text>
                </View>
                <View style={styles.conteudoBaixo}>
                    <View style={styles.linha}>
                        <View style={styles.card}>
                            <TouchableOpacity 
                                style={styles.buttonCard}
                                onPress={() => {navigation.navigate(Anamnese)}}
                            >
                                <Icon name="assignment" size={50} color="#ED4747"/>
                            </TouchableOpacity>
                            <Text style={styles.titleCard}>Anamnese</Text>
                        </View>
                        <View style={styles.card}>
                            <TouchableOpacity style={styles.buttonCard}>
                                <Icon name="assignment" size={50} color="#ED4747"/>
                            </TouchableOpacity>
                            <Text style={styles.titleCard}>Avaliação Postural</Text>
                        </View>
                    </View>
                    <View style={styles.linha}>
                        <View style={styles.card}>
                            <TouchableOpacity 
                                style={styles.buttonCard}
                                onPress={() => {navigation.navigate(Antropometria)}}
                            >
                                <Icon name="assignment" size={50} color="#ED4747"/>
                            </TouchableOpacity>
                            <Text style={styles.titleCard}>Antropometria</Text>
                        </View>
                        <View style={styles.card}>
                            <TouchableOpacity 
                                style={styles.buttonCard}
                                onPress={() => {navigation.navigate(Dobras)}}    
                            >
                                <Icon name="assignment" size={50} color="#ED4747"/>
                            </TouchableOpacity>
                            <Text style={styles.titleCard}>Dobras Cultâneas</Text>
                        </View>
                    </View>
                    <View style={styles.linha}>
                        <View style={styles.card}>
                            <TouchableOpacity style={styles.buttonCard}>
                                <Icon name="assignment" size={50} color="#ED4747"/>
                            </TouchableOpacity>
                            <Text style={styles.titleCard}>Avaliação Postural</Text>
                        </View>
                        <View style={styles.card}>
                            <TouchableOpacity style={styles.buttonCard}>
                                <Icon name="assignment" size={50} color="#ED4747"/>
                            </TouchableOpacity>
                            <Text style={styles.titleCard}>Composição Corporal</Text>
                        </View>
                    </View>
                    <View style={styles.linha}>
                        <View style={styles.card}>
                            <TouchableOpacity style={styles.buttonCard}>
                                <Icon name="assignment" size={50} color="#ED4747"/>
                            </TouchableOpacity>
                            <Text style={styles.titleCard}>Neuromotores</Text>
                        </View>
                        <View style={styles.card}>
                            <TouchableOpacity style={styles.buttonCard}>
                                <Icon name="assignment" size={50} color="#ED4747"/>
                            </TouchableOpacity>
                            <Text style={styles.titleCard}>Relações de Apoio</Text>
                        </View>
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
        width: '70%',
    },
    linha: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 30
    },
    card: {
        width: 120,
        height: 140,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonCard: {
        width: 100,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFE4E6',
        borderRadius: 100
    },
    textButtonCard: {
        fontSize: 40,
        color: '#ED4747'
    },
    titleCard: {
        fontSize: 18,
        marginTop: 5,
        color: '#650808',
        textAlign: 'center'
    },
});

export default Avaliacao;