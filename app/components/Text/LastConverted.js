import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';
import moment from 'moment';

const LastConverted = (props) => {
    const { base, quote, conversionRate, date } = props;
    return (
        <Text style={styles.smallText}>
            1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D, YYYY')}
        </Text>
    );
}

LastConverted.propTypes = {
    date: PropTypes.object,
    base: PropTypes.string,
    quote: PropTypes.string,
    conversionRate: PropTypes.number
}

export default LastConverted;
