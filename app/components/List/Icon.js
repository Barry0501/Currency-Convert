import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

import styles from './styles';
import Images from '../../data/images';

const Icon = ({ checkmark, visible, iconBackground }) => {
    const iconStyles = [styles.icon];
    if(visible){
        iconStyles.push(styles.iconVisible);
    }

    if(iconBackground){
        iconStyles.push({backgroundColor: iconBackground})
    }

    return(
        <View style={iconStyles}>
            { checkmark ? 
                <Image 
                    resizeMode="contain" 
                    source={Images.check} 
                    style={styles.checkIcon}
                />
             : null
            }
        </View>
    )
};

Icon.propTypes = {
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    iconBackground: PropTypes.string
}

export default Icon;