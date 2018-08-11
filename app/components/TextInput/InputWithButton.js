import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
//import color from 'color';
import styles from './styles';

const InputWithButton = (props) => {

    const {onPress, buttonText, editable = true, defaultValue} = props;

    const underlayColor = 'blue';

    const containerStyles = [styles.container];
    if(editable === false){
        containerStyles.push(styles.containerDisabled);
    }

    return(
        <View style={containerStyles}>
            <TouchableOpacity 
                //underlayColor={underlayColor} 
                style={styles.buttonContainer} 
                onPress={onPress}
            >
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
            <View style={styles.border} />
            <TextInput underlineColorAndroid="transparent" style={styles.input} {...props} />
        </View>
    )
}

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
    defaultValue: PropTypes.string,
}

export default InputWithButton;
