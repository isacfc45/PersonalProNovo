import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AlunoContext, AuthContext } from "../../../../../../App";
import { criarAntropometria } from "../../../../../services/AvaliacaoService";

const Antropometria = ({navigation, route}) => {
    const [antropometria, setAntropometria] = useState({
        peso: "83.2",
        estatura: "1.7",
        pescoco: "0",
        ombro: "115",
        torax: "100.7",
        cintura: "93",
        abdomen: "97.7",
        quadril: "100",
        bracoD: "33.3",
        bracoE: "32.2",
        antebracoD: "28.6",
        antebracoE: "26.5",
        coxaD: "56",
        coxaE: "54.7",
        panturrilhaD: "39.2",
        panturrilhaE: "37.5"
    })

    const {user} = useContext(AuthContext);
    const {aluno} = useContext(AlunoContext);
    const avaliacaoUid = route.params;

    const cadastroAntropometria = () => {
        criarAntropometria(user.uid, aluno.uid, avaliacaoUid, antropometria);
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
                    <Text style={styles.avaliacaoNome}>Antropometria</Text>
                <View style={styles.conteudoBaixo}>
                    <View style={styles.linha}>
                        <TextInput 
                            style={styles.input}
                            placeholder="Peso"
                            onChangeText={(peso) => setAntropometria({...antropometria, peso})}
                            value={antropometria.peso}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder="Estatura"
                            onChangeText={(estatura) => setAntropometria({...antropometria, estatura})}
                            value={antropometria.estatura}
                        />
                    </View>
                    <View style={styles.divisor}></View>
                    <View style={styles.linha}>
                        <TextInput 
                            style={styles.input}
                            placeholder="Pescoço"
                            onChangeText={(pescoco) => setAntropometria({...antropometria, pescoco})}
                            value={antropometria.pescoco}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder="Ombro"
                            onChangeText={(ombro) => setAntropometria({...antropometria, ombro})}
                            value={antropometria.ombro}
                        />
                    </View>
                    <View style={styles.linha}>
                        <TextInput 
                            style={styles.input}
                            placeholder="Toráx"
                            onChangeText={(torax) => setAntropometria({...antropometria, torax})}
                            value={antropometria.torax}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder="Cintura"
                            onChangeText={(cintura) => setAntropometria({...antropometria, cintura})}
                            value={antropometria.cintura}
                        />
                    </View>
                    <View style={styles.linha}>
                        <TextInput 
                            style={styles.input}
                            placeholder="Abdômen"
                            onChangeText={(abdomen) => setAntropometria({...antropometria, abdomen})}
                            value={antropometria.abdomen}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder="Quadril"
                            onChangeText={(quadril) => setAntropometria({...antropometria, quadril})}
                            value={antropometria.quadril}
                        />
                    </View>
                    <View style={styles.divisor}></View>
                    <View style={styles.linha}>
                        <TextInput 
                            style={styles.input}
                            placeholder="Braço D"
                            onChangeText={(bracoD) => setAntropometria({...antropometria, bracoD})}
                            value={antropometria.bracoD}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder="Braço E"
                            onChangeText={(bracoE) => setAntropometria({...antropometria, bracoE})}
                            value={antropometria.bracoE}
                        />
                    </View>
                    <View style={styles.linha}>
                        <TextInput 
                            style={styles.input}
                            placeholder="Antebraço D"
                            onChangeText={(antebracoD) => setAntropometria({...antropometria, antebracoD})}
                            value={antropometria.antebracoD}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder="Antebraço E"
                            onChangeText={(antebracoE) => setAntropometria({...antropometria, antebracoE})}
                            value={antropometria.antebracoE}
                        />
                    </View>
                    <View style={styles.linha}>
                        <TextInput 
                            style={styles.input}
                            placeholder="Coxa D"
                            onChangeText={(coxaD) => setAntropometria({...antropometria, coxaD})}
                            value={antropometria.coxaD}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder="Coxa E"
                            onChangeText={(coxaE) => setAntropometria({...antropometria, coxaE})}
                            value={antropometria.coxaE}
                        />
                    </View>
                    <View style={styles.linha}>
                        <TextInput 
                            style={styles.input}
                            placeholder="Panturrilha D"
                            onChangeText={(panturrilhaD) => setAntropometria({...antropometria, panturrilhaD})}
                            value={antropometria.panturrilhaD}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder="Panturrilha E"
                            onChangeText={(panturrilhaE) => setAntropometria({...antropometria, panturrilhaE})}
                            value={antropometria.panturrilhaE}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {cadastroAntropometria()}}
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
    },
      textoBotao: {
        fontSize: 20,
        color: '#650808',
    },
});

export default Antropometria;