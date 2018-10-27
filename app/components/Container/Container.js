import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import styles from './styles';

const Container = ({children, backgroundColor }) => {

    const containerStyles = [styles.container];

    if(backgroundColor){
        containerStyles.push({backgroundColor});
    }

    return(
        // khi nhấn ra bên ngoài sẽ làm mất Keyboard đi
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
            <View style={containerStyles}>
                {children}
            </View>
        </TouchableWithoutFeedback>       
    )
};

Container.propTypes = {
    children: PropTypes.any,
    backgroungColor: PropTypes.string
}

export default Container;