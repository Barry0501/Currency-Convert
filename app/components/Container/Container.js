import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import styles from './styles';

const Container = ({children}) => {
    return(
        // khi nhấn ra bên ngoài sẽ làm mất Keyboard đi
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
            <View style={styles.container}>
                {children}
            </View>
        </TouchableWithoutFeedback>       
    )
};

Container.propTypes = {
    children: PropTypes.any,
}

export default Container;