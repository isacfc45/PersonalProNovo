import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
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
                    name="Dashboard"
                    component={Dashboard}
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
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;