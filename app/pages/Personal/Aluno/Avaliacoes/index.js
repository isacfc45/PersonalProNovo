import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Avaliacao from '../Avaliacao';


const Avaliacoes = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.cima}>
                <View style={styles.conteudoCima}>
                    <View style={styles.logo}></View>
                    <Text style={styles.textName}>PersonalPro</Text>
                    <TouchableOpacity style={styles.buttonNav}>
                        <Icon name="menu" size={40} color="#FBFBFB"/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.baixo}>
                <View style={styles.personal}>
                    <View style={styles.dataPersonal}>
                        <View style={styles.logoPersonal}>

                        </View>
                        <View style={styles.infoPersonal}>
                            <Text style={styles.nomePersonal}>Personal Fulano</Text>
                            <Text style={styles.crefPersonal}>Cref: 11111-G</Text>
                        </View>
                    </View> 
                </View>
                <View style={styles.header}>
                    <Icon name="location-history" size={35} color="#650808"/>
                    <Text style={styles.textHeader}>Leonan Teixeira</Text>
                </View>
                <View style={styles.conteudoBaixo}>
                    <TouchableOpacity 
                        style={styles.cardAluno}
                        onPress={() => {navigation.navigate(Avaliacao)}}
                    >
                        <View style={styles.esqCardAluno}>
                            <View style={styles.fotoAluno}>
                                <Icon name='assignment' size={45} color="#650808" />
                            </View>
                            <View style={styles.infoAluno}>
                                <Text style={styles.nomeAluno}>Avaliação 1</Text>
                                <Text style={styles.dataAvaliação}>Data: 05/05/2023</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.cardAluno}
                        
                    >
                        <View style={styles.esqCardAluno}>
                            <View style={styles.fotoAluno}>
                                <Icon name='assignment' size={45} color="#650808" />
                            </View>
                            <View style={styles.infoAluno}>
                                <Text style={styles.nomeAluno}>Avaliação 2</Text>
                                <Text style={styles.dataAvaliação}>Data: 05/05/2023</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.cardAluno}
                        
                    >
                        <View style={styles.esqCardAluno}>
                            <View style={styles.fotoAluno}>
                                <Icon name='assignment' size={45} color="#650808" />
                            </View>
                            <View style={styles.infoAluno}>
                                <Text style={styles.nomeAluno}>Avaliação 3</Text>
                                <Text style={styles.dataAvaliação}>Data: 05/05/2023</Text>
                            </View>
                        </View>
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

    buttonNav: {
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
    personal: {
        width: '100%',
    },
    dataPersonal: {
        width: '42%',
        marginLeft: 20,
        marginTop: 10,
        padding: 10,
        backgroundColor: '#FFE4E6',
        borderRadius: 24,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoPersonal: {
        width: 30,
        height: 30,
        borderRadius: 25,
        backgroundColor: '#FBFBFB',
    },
    infoPersonal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    nomePersonal: {
        fontSize: 16,
        color: '#ED4747'
    },
    crefPersonal: {
        fontSize: 12,
        color: '#650808',
    },
    header: {
        width: '100%',
        marginTop: 20,
        marginLeft: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
})

export default Avaliacoes;