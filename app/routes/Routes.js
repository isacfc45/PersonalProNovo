import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard'

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
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
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;