import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AlunoContext, AuthContext } from "../../../../../../App";
import { criarDobras } from "../../../../../services/AvaliacaoService";


const Dobras = ({navigation, route}) => {

    const [dobras, setDobras] = useState({
        tricipital: "13",
        bicipital: "0",
        peitoral: "15",
        subescapular: "25",
        axilarMedia: "23",
        suprailiaca: "24",
        abdominal: "43",
        coxa: "17",
        panturrilha: "0",
        idade: "22"
    })

    const {user} = useContext(AuthContext);
    const {aluno} = useContext(AlunoContext);
    const avaliacaoUid = route.params;

    const cadastroDobras = () => {
        criarDobras(user.uid, aluno.uid, avaliacaoUid, dobras);
        navigation.navigate("Avaliacao", avaliacaoUid);
    }

    return(
        <ScrollView>
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
                    <Text style={styles.avaliacaoNome}>Dobras Cultâneas</Text>
                <View style={styles.conteudoBaixo}>
                    <View style={styles.linha}>
                        <TextInput 
                            style={styles.input}
                            placeholder="Tricipital"
                            onChangeText={(tricipital) => setDobras({...dobras, tricipital})}
                            value={dobras.tricipital}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder="Bicipital"
                            onChangeText={(bicipital) => setDobras({...dobras, bicipital})}
                            value={dobras.bicipital}
                        />
                    </View>
                    <View style={styles.linha}>
                        <TextInput 
                            style={styles.input}
                            placeholder="Peitoral"
                            onChangeText={(peitoral) => setDobras({...dobras, peitoral})}
                            value={dobras.peitoral}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder="Subescapular"
                            onChangeText={(subescapular) => setDobras({...dobras, subescapular})}
                            value={dobras.subescapular}
                        />
                    </View>
                    <View style={styles.linha}>
                        <TextInput 
                            style={styles.input}
                            placeholder="Axilar-média"
                            onChangeText={(axilarMedia) => setDobras({...dobras, axilarMedia})}
                            value={dobras.axilarMedia}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder="Suprailíaca"
                            onChangeText={(suprailiaca) => setDobras({...dobras, suprailiaca})}
                            value={dobras.suprailiaca}
                        />
                    </View>
                    <View style={styles.linha}>
                        <TextInput 
                            style={styles.input}
                            placeholder="Abdominal"
                            onChangeText={(abdominal) => setDobras({...dobras, abdominal})}
                            value={dobras.abdominal}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder="Coxa"
                            onChangeText={(coxa) => setDobras({...dobras, coxa})}
                            value={dobras.coxa}
                        />
                    </View>
                    <View style={styles.linha}>
                        <TextInput 
                            style={styles.input}
                            placeholder="Panturrilha"
                            onChangeText={(panturrilha) => setDobras({...dobras, panturrilha})}
                            value={dobras.panturrilha}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {cadastroDobras()}}
                    >
                    <Text style={styles.textoBotao}>Salvar</Text>
                    </TouchableOpacity>
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
        paddingBottom: 20,
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
    avaliacaoNome: {
        marginTop: 20,
        fontSize: 24,
        color: '#ED4747'
    },
    conteudoBaixo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    linha:{
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        width: '40%',
        borderBottomWidth: 4,
        borderRadius: 9,
        borderColor: '#ED4747',
        padding: 15,
        height: 50,
        marginVertical: 20,
        color: '#650808'
    },
    divisor: {
        borderBottomWidth: 3,
        borderBottomColor: '#650808',
        width: '50%',
        marginTop: 20,
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
        marginBottom: 40,
    },
      textoBotao: {
        fontSize: 20,
        color: '#650808',
    },
});

export default Dobras;