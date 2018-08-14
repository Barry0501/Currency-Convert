import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';

import Images from '../../data/images';
import styles from './styles';

const Title = (props) => {

    const { text, onPress } = props;

    return(
        <View style={styles.containerHeader}>
            <View style={styles.nHcontent}>
                <View style={styles.nHleft}>
                    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                        <Image style={styles.image} source={Images.arrowLeft} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
                <View style={styles.nHmid}>
                    <Text style={styles.ntitle}>{text}</Text>
                </View>
                <View style={styles.nHright}>
                </View>
            </View>
        </View>
    )
}

Title.propsTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
}

export default Title;