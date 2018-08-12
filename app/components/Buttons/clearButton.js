import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image, Text } from 'react-native';

import styles from './styles';
import Images from '../../data/images';

const ClearButton = (props) => {

    const {onPress, text, } = props;
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.wraper}>
                <Image resizeMode="contain" style={styles.icon} source={Images.icon} />
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

ClearButton.propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
}

export default ClearButton;

