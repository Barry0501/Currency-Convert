import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, StatusBar } from 'react-native';
import  Container  from '../components/Container/Container';
import { Logo } from '../components/Logo';

EStyleSheet.build({
    $primaryBlue: '#4f6D7A',
    $white: 'white',
})

export default () => (
    <Container>
        <StatusBar translucent={false} // cho Android
                   barStyle="light-content" // cho IOS
        />

        <Logo />
    </Container>
)