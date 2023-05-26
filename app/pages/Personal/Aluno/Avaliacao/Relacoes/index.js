import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from "../../../../../../App";
import { buscarAntropometriaUid } from "../../../../../services/AlunoService";



const Relacoes = ({navigation, route}) => {

    const [cintura, setCintura] = useState(0);
    const [quadril, setQuadril] = useState(0);
    const [estatura, setEstatura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [relacao, setRelacao] = useState(0);
    const [fatorRisco, setFatorRisco] = useState("");
    const [imc, setImc] = useState(0);
    const [classificacao, setClassificacao] = useState("");

    const {user} = useContext(AuthContext);
    const aluno = route.params.aluno;
    const avaliacao = route.params.avaliacao;

    useEffect(() => {
        buscarDadosRelacao();
    }, [])

    const buscarDadosRelacao = async () => {
        const dado = await buscarAntropometriaUid(user.uid, aluno.uid, avaliacao.uid);
        const newDado = dado[0];
        setCintura(newDado.cintura);
        setQuadril(newDado.quadril);
        setEstatura(newDado.estatura);
        setPeso(newDado.peso)
    }

    const calcularRelacao = () => {
        const calculo = cintura/quadril;
        setRelacao(calculo);
        if(relacao < 0.95){
            setFatorRisco("Baixo");
        } else if(relacao > 0.95 && relacao < 1){
            setFatorRisco("Moderado");
        } else if(relacao >= 1) {
            setFatorRisco("Alto")
        }
    }

    const calcularImc = () => {
        const calculo = peso/(estatura*estatura)
        setImc(calculo.toFixed(2));
        if(imc < 18.5){
            setClassificacao("Baixo Peso");
        } else if(imc >= 18.6 && imc < 25){
            setClassificacao("Peso Normal");
        } else if(imc >= 25 && imc < 30){
            setClassificacao("Sobrepeso");
        } else if(imc >= 30 && imc < 35){
            setClassificacao("Obesidade Nivel 1");
        } else if(imc >= 35 && imc < 40){
            setClassificacao("Obesidade Nivel 2");
        } else{
            setClassificacao("Obesidade Nivel 3 (mórbida)")
        }
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
                    <Text style={styles.avaliacaoNome}>Relações de Apoio</Text>
                <View style={styles.conteudoBaixo}>
                    <View style={styles.gridResultado}>
                        <Text style={styles.tituloGrid}>Relação cintura/quadril</Text>
                        <View style={styles.linhaGrid}>
                            <Text style={styles.textoGrid}>Circunferência cintura: </Text>
                            <Text style={styles.resultadoGrid}>{cintura}</Text>
                        </View>
                        <View style={styles.linhaGrid}>
                            <Text style={styles.textoGrid}>Circunferência quadril: </Text>
                            <Text style={styles.resultadoGrid}>{quadril}</Text>
                        </View>
                        <View style={styles.linhaGrid}>
                            <Text style={styles.textoGrid}>Relação: </Text>
                            <Text style={styles.resultadoGrid}>{relacao}</Text>
                        </View>
                        <View style={styles.linhaGrid}>
                            <Text style={styles.textoGrid}>Fator de risco: </Text>
                            <Text style={styles.resultadoGrid}>{fatorRisco}</Text>
                        </View>
                        <View style={styles.gridButton}>
                            <TouchableOpacity 
                                style={styles.buttonResultado}
                                onPress={() => {calcularRelacao()}}
                            >
                                <Text style={styles.textButtonResultado}>Calcular</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.gridResultado}>
                        <Text style={styles.tituloGrid}>Indice de Massa Muscular(IMC)</Text>
                        <View style={styles.linhaGrid}>
                            <Text style={styles.textoGrid}>Estatura: </Text>
                            <Text style={styles.resultadoGrid}>{estatura}</Text>
                        </View>
                        <View style={styles.linhaGrid}>
                            <Text style={styles.textoGrid}>Massa Corporal: </Text>
                            <Text style={styles.resultadoGrid}>{peso}</Text>
                        </View>
                        <View style={styles.linhaGrid}>
                            <Text style={styles.textoGrid}>IMC: </Text>
                            <Text style={styles.resultadoGrid}>{imc}</Text>
                        </View>
                        <View style={styles.linhaGrid}>
                            <Text style={styles.textoGrid}>Classificação: </Text>
                            <Text style={styles.resultadoGrid}>{classificacao}</Text>
                        </View>
                        <View style={styles.gridButton}>
                            <TouchableOpacity 
                                style={styles.buttonResultado}
                                onPress={() => {calcularImc()}}
                            >
                                <Text style={styles.textButtonResultado}>Calcular</Text>
                            </TouchableOpacity>
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
    gridResultado: {
        width: "80%",
        backgroundColor: "#FFE4E6",
        borderRadius: 20,
        marginVertical: 40,
        padding: 20
    },
    tituloGrid: {
        fontSize: 18,
        color: "#650808",
        position: 'absolute',
        marginTop: -12,
        marginLeft: 20,
        width: "100%"
        // backgroundColor: "#ED4747",
        // padding: 4,
        // borderRadius: 10
    },
    linhaGrid: {
        flexDirection: 'row',
        marginVertical: 10
    },
    textoGrid: {
        fontSize: 16,
        color: "#650808"
    },
    resultadoGrid: {
        fontSize: 16,
        color: "#ED4747",
        marginLeft: 5,
        fontWeight: 'bold',
        borderBottomWidth: 2,
        borderBottomColor: "#650808"
    },
    gridButton: {
        width: "100%",
        alignItems: "center",
        marginTop: 15
    },
    buttonResultado: {
        backgroundColor: "#ED4747",
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignContent: 'flex-end'
    },
    textButtonResultado: {
        color: "#650808",
        fontSize: 16
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

export default Relacoes;