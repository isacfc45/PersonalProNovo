import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Alunos from "../Alunos";
import { AuthContext } from "../../../../App";

const Dashboard = ({navigation}) => {
    const {user, logout} = useContext(AuthContext);

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
                        <TouchableOpacity onPress={logout}>
                            <Icon name="menu" size={40} color="#FBFBFB"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.baixo}>
                <View style={styles.header}>
                    <Icon name="home" size={35} color="#650808"/>
                    <Text style={styles.textHeader}>Página Inicial</Text>
                </View>
                <View style={styles.conteudoBaixo}>
                    <View style={styles.linha}>
                        <View style={styles.card}>
                            <TouchableOpacity 
                                style={styles.buttonCard}
                                onPress={() => {navigation.navigate(Alunos)}}
                            >
                                <Icon name="people" size={50} color="#ED4747"/>
                            </TouchableOpacity>
                            <Text style={styles.titleCard}>Alunos</Text>
                        </View>
                        <View style={styles.card}>
                            <TouchableOpacity style={styles.buttonCard}>
                                <Icon name="attach-money" size={50} color="#ED4747"/>
                            </TouchableOpacity>
                            <Text style={styles.titleCard}>Finanças</Text>
                        </View>
                    </View>
                    <View style={styles.linha}>
                        <View style={styles.card}>
                            <TouchableOpacity style={styles.buttonCard}>
                                <Icon name="format-list-bulleted" size={50} color="#ED4747"/>
                            </TouchableOpacity>
                            <Text style={styles.titleCard}>Relatórios</Text>
                        </View>
                        <View style={styles.card}>
                            <TouchableOpacity style={styles.buttonCard}>
                                <Icon name="message" size={50} color="#ED4747"/>
                            </TouchableOpacity>
                            <Text style={styles.titleCard}>Mensagens</Text>
                        </View>
                    </View>
                    <View style={styles.linha}>
                        <View style={styles.card}>
                            <TouchableOpacity style={styles.buttonCard}>
                                <Icon name="people" size={50} color="#ED4747"/>
                            </TouchableOpacity>
                            <Text style={styles.titleCard}>Alguma</Text>
                        </View>
                        <View style={styles.card}>
                            <TouchableOpacity style={styles.buttonCard}>
                                <Icon name="people" size={50} color="#ED4747"/>
                            </TouchableOpacity>
                            <Text style={styles.titleCard}>Coisa</Text>
                        </View>
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
        width: 100,
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
        color: '#650808'
    },
});

export default Dashboard;