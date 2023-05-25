import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from 'react-native-check-box';
import { AuthContext } from "../../../../../../App";
import { criarAnamnese } from "../../../../../services/AlunoService";

const Anamnese = ({navigation, route}) => {
    const [anamnese, setAnamnese] = useState({
        objetivo: "A",
        restricoes: "B",
        medicamentos: "CCC",
        dores: "D",
        observacoes: "E"
    })

    const {user} = useContext(AuthContext);
    const aluno = route.params.aluno;
    const avaliacao = route.params.avaliacao;

    const cadastroAnamnese = () => {
        criarAnamnese(user.uid, aluno.uid, avaliacao.uid, anamnese);
        navigation.navigate("Avaliacao", {aluno, avaliacao})
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
                    <Text style={styles.avaliacaoNome}>Anamnese</Text>
                <View style={styles.conteudoBaixo}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Objetivo"
                        onChangeText={(objetivo) => setAnamnese({...anamnese, objetivo})}
                        value={anamnese.objetivo}
                    />
                    {/* <View style={styles.caixa}>
                        <Text style={styles.label}>Nível de condicionamento</Text>
                        <View style={styles.caixaCheck}>
                            <CheckBox 
                                style={styles.checkBox}
                                onClick={() => {}}
                                rightText={"Iniciante"}
                                isChecked=""
                                rightTextStyle={{fontSize: 12, color: '#650808', marginLeft: 0}}
                                checkBoxColor="#650808"
                                checkedCheckBoxColor="#ED4747"
                            />
                            <CheckBox 
                                style={styles.checkBox}
                                onClick={() => {}}
                                rightText={"Intermediario"}
                                isChecked=""
                                rightTextStyle={{fontSize: 12, color: '#650808', marginLeft: 0}}
                                checkBoxColor="#650808"
                                checkedCheckBoxColor="#ED4747"
                            />
                            <CheckBox 
                                style={styles.checkBox}
                                onClick={() => {}}
                                rightText={"Avançado"}
                                isChecked='false'
                                rightTextStyle={{fontSize: 12, color: '#650808', marginLeft: 0}}
                                checkBoxColor="#650808"
                                checkedCheckBoxColor="#ED4747"
                            />
                        </View>
                    </View>
                    <View style={styles.caixa}>
                        <Text style={styles.label}>Fumante</Text>
                        <View style={styles.caixaCheck}>
                            <CheckBox 
                                style={styles.checkBox}
                                onClick={() => {}}
                                rightText={"Sim"}
                                rightTextStyle={{fontSize: 12, color: '#650808', marginLeft: 0}}
                                checkBoxColor="#650808"
                                checkedCheckBoxColor="#ED4747"
                            />
                            <CheckBox 
                                style={styles.checkBox}
                                onClick={() => {}}
                                rightText={"Não"}
                                rightTextStyle={{fontSize: 12, color: '#650808', marginLeft: 0}}
                                checkBoxColor="#650808"
                                checkedCheckBoxColor="#ED4747"
                            />
                        </View>
                    </View> */}
                    <TextInput 
                        style={styles.input}
                        placeholder="Restrições"
                        onChangeText={(restricoes) => setAnamnese({...anamnese, restricoes})}
                        value={anamnese.restricoes}
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder="Medicamentos"
                        onChangeText={(medicamentos) => setAnamnese({...anamnese, medicamentos})}
                        value={anamnese.medicamentos}
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder="Dores"
                        onChangeText={(dores) => setAnamnese({...anamnese, dores})}
                        value={anamnese.dores}
                    />
                    <TextInput 
                        multiline={true}
                        numberOfLines={4}
                        style={styles.input}
                        placeholder="Observações"
                        onChangeText={(observacoes) => setAnamnese({...anamnese, observacoes})}
                        value={anamnese.observacoes}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {cadastroAnamnese()}}                        
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
    input: {
        width: '80%',
        borderBottomWidth: 4,
        borderRadius: 9,
        borderColor: '#ED4747',
        padding: 15,
        height: 50,
        marginVertical: 20,
        color: '#650808'
    },
    caixa: {
        width: '80%',
        marginTop: 20,
        alignItems: 'flex-start'
    },
    label: {
        fontSize: 16,
        color: '#ED4747'
    },
    caixaCheck: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    checkBox: {
        width: '33%',
        marginTop: 5,
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

export default Anamnese;