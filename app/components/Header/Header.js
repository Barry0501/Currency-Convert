import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity  } from 'react-native';
import styles from './styles';
import Images from '../../data/images';

const Header = ({onPress}) => {

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Image resizeMode="contain" source={Images.gear} style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

Header.propTypes = {
    onPress: PropTypes.func,
}

export default Header;