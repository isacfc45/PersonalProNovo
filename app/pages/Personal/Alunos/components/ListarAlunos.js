import { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { AuthContext } from "../../../../../App";
import { buscarAlunos } from "../../../../services/AlunoService";

export default ListarAlunos = (idPersonal) => {
    const {user} = useContext(AuthContext);

    let lista = []
    const listar = async() => {
        lista = await buscarAlunos(user.uid);
    }
    listar();

    return(
        <View>
            <FlatList 
                data={lista}
                renderItem={(item)=>
                    <TouchableOpacity 
                        style={styles.cardAluno}
                        onPress={() => {navigation.navigate(Aluno)}}
                    >
                        <View style={styles.esqCardAluno}>
                            <View style={styles.fotoAluno}>
                                <Icon name='location-history' size={50} color="#650808" />
                            </View>
                            <View style={styles.infoAluno}>
                                <Text style={styles.nomeAluno}>{item.email}</Text>
                                <Text style={styles.dataAvaliação}>{item.uid}</Text>
                            </View>
                        </View>
                        <View style={styles.dirCardAluno}>
                            <TouchableOpacity>
                                <Icon name='assignment' size={30} color="#650808"/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name='multitrack-audio' size={30} color="#650808"/>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                }
            />
        </View>
    );

}

const styles = StyleSheet.create({
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
        borderRadius: 60 
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