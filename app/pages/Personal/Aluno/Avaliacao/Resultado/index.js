import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AlunoContext, AuthContext } from "../../../../../../App";
import { buscarAvaliacao } from "../../../../../services/AvaliacaoService";



const Resultado = ({navigation, route}) => {

    const [peso, setPeso] = useState(0);

    const [antropometria, setAntropometria] = useState({});
    const [dobras, setDobras] = useState({});
    const [pesoIdealMinimo, setPesoIdealMinimo] = useState(0);
    const [pesoIdealMaximo, setPesoIdealMaximo] = useState(0);
    const [pesoMagro, setPesoMagro] = useState(0);
    const [pesoGordo, setPesoGordo] = useState(0);
    const [percentualGordura, setPercentualGordura] = useState(0);
    const [percentualMassa, setPercentualMassa] = useState(0);
    const [percentualMinimo, setPercentualMinimo] = useState(0);
    const [percentualMaximo, setPercentualMaximo] = useState(0);
    const [resultado, setResultado] = useState("");

    const {user} = useContext(AuthContext);
    const {aluno} = useContext(AlunoContext);
    const avaliacaoUid = route.params;

    // const [objAvalicao, setObjAvalicao] = useState(null);


    useEffect(() => {
        buscarDados();
    }, [])

    useEffect(()=>{

        calcularResultado();

    },[])

    // const calcularResultados = () => {
    //     const {antropometria} = objAvalicao;
    //     const imc = calcularIMC(antropometria.peso, antropometria.estatura);

    //     console.log(imc);

    // }

    // const calcularGorduraCoporal(..){

    // }

    // const  calcularIMC = (peso, altura) => {
    //     imc = peso / altura;
    //     return imc;
    // }

    const buscarDados = async () => {
        const dado = await buscarAvaliacao(user.uid, aluno.uid, avaliacaoUid);
        setAntropometria(dado.antropometria);
        setDobras(()=>dado.dobras)

        setPeso(()=>antropometria.peso)
 
        calcularResultado(dobras.tricipital, dobras.subescapular, dobras.peitoral, dobras.axilarMedia, dobras.abdominal, dobras.suprailiaca, dobras.coxa, dado.idade, antropometria.peso, antropometria.estatura)        
    }

    const calcularResultado = (tricipital, subescapular, peitoral, axilarMedia, abdominal, suprailiaca, coxa, idade, peso, estatura) => {
        const DC = 1.112 - 0.00043499 * (tricipital + subescapular + peitoral + axilarMedia + abdominal + suprailiaca + coxa) + 0.00000055 * (tricipital + subescapular + peitoral + axilarMedia + abdominal + suprailiaca + coxa) * 2 - 0.00028826 * (idade);
        const PG = (495/DC) - 450;
        setPercentualGordura(PG.toFixed(2));
        const percMassa = 100 - percentualGordura
        setPercentualMassa(percMassa);
        if(idade < 30){
            setPercentualMinimo(14.00)
            setPercentualMaximo(20.00)
            if(percentualGordura < 11){
                setResultado("Atleta");
            } else if(percentualGordura >= 11 && percentualGordura < 14){
                setResultado("Bom");
            } else if(percentualGordura >= 14 && percentualGordura < 21){
                setResultado("Normal");
            } else if(percentualGordura >= 21 && percentualGordura < 23){
                setResultado("Elevado");
            } else {
                setResultado("Muito elevado")
            }
        } else if(idade >= 30 && idade < 40){
            setPercentualMinimo(15.00)
            setPercentualMaximo(21.00)
            if(percentualGordura < 12){
                setResultado("Atleta");
            } else if(percentualGordura >= 12 && percentualGordura < 15){
                setResultado("Bom");
            } else if(percentualGordura >= 15 && percentualGordura < 22){
                setResultado("Normal");
            } else if(percentualGordura >= 22 && percentualGordura < 24){
                setResultado("Elevado");
            } else {
                setResultado("Muito elevado")
            }
        } else if(idade >= 40 && idade < 50){
            setPercentualMinimo(17.00)
            setPercentualMaximo(23.00)
            if(percentualGordura < 14){
                setResultado("Atleta");
            } else if(percentualGordura >= 14 && percentualGordura < 17){
                setResultado("Bom");
            } else if(percentualGordura >= 17 && percentualGordura < 24){
                setResultado("Normal");
            } else if(percentualGordura >= 24 && percentualGordura < 26){
                setResultado("Elevado");
            } else {
                setResultado("Muito elevado")
            }
        } else if(idade >= 50){
            setPercentualMinimo(18.00)
            setPercentualMaximo(24.00)
            if(percentualGordura < 15){
                setResultado("Atleta");
            } else if(percentualGordura >= 15 && percentualGordura < 18){
                setResultado("Bom");
            } else if(percentualGordura >= 18 && percentualGordura < 25){
                setResultado("Normal");
            } else if(percentualGordura >= 25 && percentualGordura < 27){
                setResultado("Elevado");
            } else {
                setResultado("Muito elevado")
            }
        }

        // Errado calculo de peso ideal!!!
        const imc = peso/(estatura*estatura);
        const pesoMin = (25*peso)/imc;
        setPesoIdealMinimo(pesoMin.toFixed(2));
        const pesoMax = (26*peso)/imc;
        setPesoIdealMaximo(pesoMax.toFixed(2));

        const pesoGor = (peso*percentualGordura)/100
        setPesoGordo(pesoGor.toFixed(2));
        const pesoMag = peso - pesoGor;
        setPesoMagro(pesoMag.toFixed(2)) 
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
                    <Text style={styles.avaliacaoNome}>Resultados</Text>
                <View style={styles.conteudoBaixo}>
                    <View style={styles.gridResultado}>
                        <Text style={styles.tituloGrid}>Composição Corporal</Text>
                        <View style={styles.linhaGrid}>
                            <Text style={styles.textoGrid}>% Gordura Corporal: </Text>
                            <Text style={styles.resultadoGrid}>{percentualGordura} %</Text>
                        </View>
                        <View style={styles.linhaGrid}>
                            <Text style={styles.textoGrid}>% Massa Magra: </Text>
                            <Text style={styles.resultadoGrid}>{percentualMassa} %</Text>
                        </View>
                        <View style={styles.linhaGrid}>
                            <Text style={styles.textoGrid}>% Ideal Minimo: </Text>
                            <Text style={styles.resultadoGrid}>{percentualMinimo}.00 %</Text>
                        </View>
                        <View style={styles.linhaGrid}>
                            <Text style={styles.textoGrid}>% Ideal Máximo: </Text>
                            <Text style={styles.resultadoGrid}>{percentualMaximo}.00 %</Text>
                        </View>
                        <View style={styles.linhaGrid}>
                            <Text style={styles.textoGrid}>Resultado: </Text>
                            <Text style={styles.resultadoGrid}>{resultado}</Text>
                        </View>
                        <View style={styles.gridButton}>
                            <TouchableOpacity 
                                style={styles.buttonResultado}
                                onPress={() => {buscarDados()}}
                            >
                                <Text style={styles.textButtonResultado}>Calcular</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.gridResultado}>
                        <Text style={styles.tituloGrid}>Margem de Peso</Text>
                        <View style={styles.linhaGrid}>
                            <Text style={styles.textoGrid}>Peso atual: </Text>
                            <Text style={styles.resultadoGrid}>{peso} Kg</Text>
                        </View>
                        <View style={styles.linhaGrid}>
                            <Text style={styles.textoGrid}>Peso ideal minimo: </Text>
                            <Text style={styles.resultadoGrid}>{pesoIdealMinimo} Kg</Text>
                        </View>
                        <View style={styles.linhaGrid}>
                            <Text style={styles.textoGrid}>Peso ideal máximo: </Text>
                            <Text style={styles.resultadoGrid}>{`${pesoIdealMaximo} Kg`}</Text>
                        </View>                                        
                    </View>
                    <View style={styles.gridResultado}>
                        <Text style={styles.tituloGrid}>Distribuição de Peso</Text>
                        <View style={styles.linhaGrid}>
                            <Text style={styles.textoGrid}>Peso gordo: </Text>
                            <Text style={styles.resultadoGrid}>{pesoGordo} Kg</Text>
                        </View>
                        <View style={styles.linhaGrid}>
                            <Text style={styles.textoGrid}>Peso magro: </Text>
                            <Text style={styles.resultadoGrid}>{pesoMagro} Kg</Text>
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
        width: "100%",
        fontWeight: "bold"
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

export default Resultado;