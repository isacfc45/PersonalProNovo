import React from 'react';
import Routes from './app/routes/Routes';
import { Text } from 'react-native';
import Home from './app/pages/Home';


export default function App({ navigation }) {
    return (
        <>
            <Routes/>
            <Text onPress={()=>{navigation.navigate(Home)}}>AAAAAAAAAAAAAA</Text>
        </>
    );
}