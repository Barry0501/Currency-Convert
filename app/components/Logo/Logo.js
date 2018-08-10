import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import Images from '../../data/images';
import styles from './styles';

const Logo = () => {
    return(
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" style={styles.containerImage} source={Images.backgroundLogo}>
                <Image resizeMode="contain" style={styles.containerLogo} source={Images.logo} />
            </ImageBackground>
            <Text style={styles.text}>Currency Converter</Text>
        </View>
    )
}

export default Logo