import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Personal/Dashboard';
import CadastroPersonal from '../pages/Personal/Cadastro';
import Alunos from '../pages/Personal/Alunos';
import Aluno from '../pages/Personal/Aluno';
import Avaliacoes from '../pages/Personal/Aluno/Avaliacoes';
import Avaliacao from '../pages/Personal/Aluno/Avaliacao';
import Anamnese from '../pages/Personal/Aluno/Avaliacao/Anamnese';
import Antropometria from '../pages/Personal/Aluno/Avaliacao/Antropometria';
import Dobras from '../pages/Personal/Aluno/Avaliacao/Dobras';
import CriarAluno from '../pages/Personal/Alunos/CriarAluno';
import { AuthContext } from '../../App';
import CriarAvaliacao from '../pages/Personal/Aluno/Avaliacoes/CriarAvaliacao';
import Relacoes from '../pages/Personal/Aluno/Avaliacao/Relacoes';
import Resultado from '../pages/Personal/Aluno/Avaliacao/Resultado';


const Stack = createNativeStackNavigator();

const Routes = () => {
    const {user} = useContext(AuthContext);
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                {!user && (<>
                    <Stack.Screen
                        options={{
                            tittle: "",
                            headerTransparent: true,
                            headerShown: false,
                        }}
                        name="Home"
                        component={Home}
                    />
                    <Stack.Screen
                        options={{
                            title:"",
                            headerTransparent: true,
                            headerShown: false,
                        }}
                        name="Login"
                        component={Login}
                    />
                </>)}
                {user && (<>
                    <Stack.Screen
                        options={{
                            title:"",
                            headerTransparent: true,
                            headerShown: false,
                        }}
                        name="Dashboard"
                        component={Dashboard}
                    />
                    
                    <Stack.Screen
                        options={{
                            title:"",
                            headerTransparent: true,
                            headerShown: false,
                        }}
                        name="CadastroPersonal"
                        component={CadastroPersonal}
                    />
                    <Stack.Screen
                        options={{
                            title:"",
                            headerTransparent: true,
                            headerShown: false,
                        }}
                        name="Alunos"
                        component={Alunos}
                    />
                    <Stack.Screen
                        options={{
                            title:"",
                            headerTransparent: true,
                            headerShown: false,
                        }}
                        name="Aluno"
                        component={Aluno}
                    />
                    <Stack.Screen
                        options={{
                            title:"",
                            headerTransparent: true,
                            headerShown: false,
                        }}
                        name="Avaliacoes"
                        component={Avaliacoes}
                    />
                    <Stack.Screen
                        options={{
                            title:"",
                            headerTransparent: true,
                            headerShown: false,
                        }}
                        name="Avaliacao"
                        component={Avaliacao}
                    />
                    <Stack.Screen
                        options={{
                            title:"",
                            headerTransparent: true,
                            headerShown: false,
                        }}
                        name="Anamnese"
                        component={Anamnese}
                    />
                    <Stack.Screen
                        options={{
                            title:"",
                            headerTransparent: true,
                            headerShown: false,
                        }}
                        name="Antropometria"
                        component={Antropometria}
                    />
                    <Stack.Screen
                        options={{
                            title:"",
                            headerTransparent: true,
                            headerShown: false,
                        }}
                        name="Dobras"
                        component={Dobras}
                    />
                    <Stack.Screen
                        options={{
                            title:"",
                            headerTransparent: true,
                            headerShown: false,
                        }}
                        name="CriarAluno"
                        component={CriarAluno}
                    />
                    <Stack.Screen
                        options={{
                            title:"",
                            headerTransparent: true,
                            headerShown: false,
                        }}
                        name="CriarAvaliacao"
                        component={CriarAvaliacao}
                    />
                    <Stack.Screen
                        options={{
                            title:"",
                            headerTransparent: true,
                            headerShown: false,
                        }}
                        name="Relacoes"
                        component={Relacoes}
                    />
                    <Stack.Screen
                        options={{
                            title:"",
                            headerTransparent: true,
                            headerShown: false,
                        }}
                        name="Resultado"
                        component={Resultado}
                    />
                </>)}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;